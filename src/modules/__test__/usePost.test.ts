import { renderHook, act } from "@testing-library/react-hooks";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { useComments } from "../comments/hooks/useComments";
import { usePost } from "../posts/hooks/usePost";

const mockResponse = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
};

const server = setupServer(
  rest.get(`${process.env.REACT_APP_API_URL}/posts/1`, (req, res, ctx) => {
    return res(ctx.json(mockResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("should get post", async () => {
  const { result, waitForNextUpdate } = renderHook(() => usePost({ id: "1" }));

  await waitForNextUpdate();

  expect(result.current.data).toEqual(mockResponse);
});
