import "@testing-library/jest-dom";
import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";
import { handlers } from "./mocks/handlers";

//Establishes API mocking before all tests
beforeAll(() => server.listen());

/**Request any request handlers that we may add during the tests
 *so they don't affect other test
 */
afterEach(() => server.resetHandlers(...handlers));

//clean up after test are finished
afterAll(() => server.close());
