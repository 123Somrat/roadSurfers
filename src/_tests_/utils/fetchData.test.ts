import { fetchData } from "../../utils/fetchData";
import { mockData } from "../_mocks_/data";

global.fetch = jest.fn(
  () =>
    Promise.resolve({
      json: () => Promise.resolve(mockData),
      headers: new Headers(),
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
      type: "basic",
      url: "",
    }) as Promise<Response>
);
describe("fetchData fetches station data correctly", () => {
  it("should fetch users", async () => {
    const data = await fetchData("/api/station");
    expect(data).toEqual(mockData);
  });
});
