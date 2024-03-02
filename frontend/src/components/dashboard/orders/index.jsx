import styled from "styled-components";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSellerOrder } from "../../../Features/order/orderReducer";
import { Table } from "../../common/styles";
import TableCard from "../../common/TableCard";

export default function HostOrderIndex() {
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    dispatch(getSellerOrder());
  }, []);
  const { order, showAlert, alertText } = useSelector((store) => store.order);

  return (
    <>
      <HostOrderIndexPlaceContainer className="flex item-start column gap-2 justify-center">
        <div className="wrapper auto flex column gap-3">
          <div className="w-100">
            {order?.length > 0 ? (
              <div className="w-100 flex column gap-3">
                <h3 className="fs-30 w-100 family2 text-extra-bold">
                  My Orders
                </h3>
                <Table>
                  <div className="TableContainer">
                    <table className="tableWrapper">
                      <thead>
                        <tr>
                          <th>Guest Info</th>
                          <th>Rooms Info</th>
                          <th>Status</th>
                          <th>Paid</th>
                          <th>Check In</th>
                          <th>Check Out</th>
                          <th>Rate</th>
                        </tr>
                      </thead>
                      <tbody>
                        {order?.map((x) => {
                          return (
                            <TableCard
                              type={"sellerorder"}
                              x={x}
                              key={x?._id}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                  {/* {usernoOfpage > 0 && <Pagination type="users" />} */}
                </Table>
              </div>
            ) : (
              <h3 className="fs-30 w-100 family2 text-extra-bold">
                My Orders
                <span className="fs-20 py-1 block w-100 family1 text-light">
                  You have no orders for you listings
                </span>
              </h3>
            )}
          </div>
        </div>
      </HostOrderIndexPlaceContainer>
      {/* <Footer/> */}
    </>
  );
}

const HostOrderIndexPlaceContainer = styled.div`
  width: 100%;
  padding: 4rem 0;
  .wrapper{
    width: 90%;
  }
`;
