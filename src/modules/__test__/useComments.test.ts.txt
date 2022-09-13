import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useComments } from "../comments/hooks/useComments";

const mockResponse = [
  {
    postId: 1,
    id: 1,
    name: "id labore ex et quam laborum",
    email: "Eliseo@gardner.biz",
    body: "laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium",
  },
];

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_URL}/posts/1/comments`,
    (req, res, ctx) => {
      return res(ctx.json(mockResponse));
    }
  ),
  rest.get(
    `${process.env.REACT_APP_API_URL}/posts/123/comments`,
    (req, res, ctx) => {
      return res(ctx.json([]));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should get comments", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useComments({ postId: 1 })
  );

  await waitForNextUpdate();

  expect(result.current.data).toEqual(mockResponse);
});

test("should return empty array of comments", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    useComments({ postId: 123 })
  );

  await waitForNextUpdate();

  expect(result.current.data).toEqual([]);
});
