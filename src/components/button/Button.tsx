import React from "react";

import type { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return <div className="button">{children}</div>;
}
