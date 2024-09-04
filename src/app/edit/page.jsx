import EditPrices from "@/components/EditPrices";
import { useRouter } from "next/router";
import React from "react";

const EditPage = () => {
  const router = useRouter();
  const { id } = router.query();
  return (
    <div>
      <EditPrices id={id} />
    </div>
  );
};

export default EditPage;
