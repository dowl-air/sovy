import { expect, test } from "@playwright/test";

test("security headers are present on homepage", async ({ request }) => {
    const response = await request.get("/");

    expect(response.ok()).toBeTruthy();

    const headers = response.headers();

    expect(headers["content-security-policy"]).toContain("default-src 'self'");
    expect(headers["content-security-policy"]).toContain("frame-ancestors 'none'");
    expect(headers["content-security-policy"]).toContain("script-src 'self' 'unsafe-inline'");
    expect(headers["content-security-policy"]).not.toContain("require-trusted-types-for 'script'");

    expect(headers["strict-transport-security"]).toContain("includeSubDomains");
    expect(headers["strict-transport-security"]).toContain("preload");

    expect(headers["cross-origin-opener-policy"]).toBe("same-origin");
    expect(headers["x-frame-options"]).toBe("DENY");
});
