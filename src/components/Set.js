import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";
const Set = ({ sdata }) => {
  return (
    <>
      {sdata.map((ele, k) => {
        return (
          <>
            <Stack spacing={1} style={{ width: "22rem" }} className="mb-4">
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={"21rem"}
                height={200}
                className="rounded"
              />
              <div className="d-flex justify-content-between">
                <Skeleton variant="text" animation="wave" width={"12rem"} />
                <Skeleton variant="text" animation="wave" width={"5rem"} />
              </div>
            </Stack>
          </>
        );
      })}
    </>
  );
};

export default Set;
