import { jest } from "@jest/globals";
import { articleRepository } from "../../src/repositories/articleRepository";
import { articleService } from "../../src/services/articleService";

describe("getArticles testing suite", () => {
  it("should return array of articles", async () => {
    jest.spyOn(articleRepository, "findAllArticles").mockResolvedValueOnce([]);

    const promise = articleService.getArticles();

    expect(promise).resolves.toEqual([]);
  });
});

describe("getArticlesByCategory testing suite", () => {
  it("should throw error if there is no category", async () => {
    const category = "";

    const promise = articleService.getArticlesByCategory(category);

    expect(promise).rejects.toBe("Bad Request!");
  });

  it("should return array of articles", async () => {
    const category = "Civil";

    jest
      .spyOn(articleRepository, "findArticlesByCategory")
      .mockResolvedValueOnce([]);

    const promise = articleService.getArticlesByCategory(category);

    expect(promise).resolves.toEqual([]);
  });
});

describe("getArticlesByKeyWord testing suite", () => {
  it("should throw error if there is no keyword", async () => {
    const keyword = "";

    const promise = articleService.getArticlesByKeyword(keyword);

    expect(promise).rejects.toBe("Bad Request!");
  });

  it("should return array of articles", async () => {
    const keyword = "Civil";

    jest
      .spyOn(articleRepository, "findArticlesByKeyword")
      .mockResolvedValueOnce([]);

    const promise = articleService.getArticlesByKeyword(keyword);

    expect(promise).resolves.toEqual([]);
  });
});
