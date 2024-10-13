"use client"
import withAuth from "@/components/withAuth";

const page = () => {
  
  return (
    <>
    {/* <withAuth></withAuth> */}
      <div>welcome to the dashbaord admin</div>

    </>
  );
};
export default withAuth(page) ;
