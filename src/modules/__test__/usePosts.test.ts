import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { usePosts } from "../posts/hooks/usePosts";

const mockResponse = [
  {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  },
];

const server = setupServer(
  rest.get(
    `${process.env.REACT_APP_API_URL}/posts?_page=1&_limit=1`,
    (req, res, ctx) => {
      return res(ctx.json(mockResponse));
    }
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should get posts", async () => {
  const { result, waitForNextUpdate } = renderHook(() =>
    usePosts({ page: 1, limit: 1 })
  );

  await waitForNextUpdate();

  expect(result.current.posts).toEqual(mockResponse);
});
