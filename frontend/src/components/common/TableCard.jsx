import React from "react";
import { AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { AiOutlineCheck } from "react-icons/ai";
import moment from "moment";
// import Delete from "./DeleteModal";
import { FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { BsTrash } from "react-icons/bs";
export default function TableCard({ x, type }) {
  const { userAlert } = useSelector((store) => store.user);
  let createddate = moment(x?.createdAt);
  createddate = createddate.format("MMMM Do YYYY");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  // delete user function
  const handleDeleteUser = () => {
    // dispatch(getUser(x));
  };

  // edit user function
  const handleEditUser = () => {
    navigate(`/dashboard/users/${x?._id}`);
  };

  return (
    <>
      {/* <Delete type="users" /> */}
      <AnimatePresence
        initial="false"
        exitBeforeEnter={true}
        onExitComplete={() => null}
      >
        {/* {userAlert && <Delete type={"users"} />} */}
      </AnimatePresence>
      <tr key={x?._id}>
        <td>{x?._id}</td>
        <td>
          <div className="flex fs-12 text-bold item-center gap-2">
            <img src={x.image} alt="" className="avatar" />
            {x?.username}
          </div>
        </td>
        <td>{x?.email}</td>
        <td>{x?.country}</td>
        <td>{x?.country}</td>
        <td>
          <div className="action">
            <div className="icons" onClick={handleDeleteUser}>
              <BsTrash />
            </div>
            <div className="icons" onClick={handleEditUser}>
              <MdEdit />
            </div>
          </div>
        </td>
      </tr>
    </>
  );
}
