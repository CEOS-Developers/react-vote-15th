import React, { useCallback, useState } from "react";
import { useRouter } from "next/router";

export default (initValue: any = "/", router: any) => {
  router.push(initValue).then((r: any) => null);
};
