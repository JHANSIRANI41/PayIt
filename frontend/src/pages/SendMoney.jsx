import React, { useState } from "react";
import Heading from "../components/Heading";
import { useSearchParams } from "react-router-dom";
import { sendMoney } from "../services/operations/transactionApi";
import { useRecoilValue } from "recoil";
import { tokenAtom, userAtom } from "../store/atoms";
import Appbar from "../components/Appbar";

const SendMoney = () => {
  const [searchParams] = useSearchParams();
  const name = searchParams.get("name").split("_").join(" ");
  const id = searchParams.get("id");
  const token = useRecoilValue(tokenAtom);
  const [amount, setAmount] = useState("");
  const [success, setSuccess] = useState(false);
  const user = useRecoilValue(userAtom);
  const [statement, setStatement] = useState("");
  function handleChange(event) {
    setAmount(event.target.value);
  }

  async function handleClick() {
    setStatement("");
    const response = await sendMoney(amount, id, token);
    console.log(response);
    if (response === "Transfer successful") {
      setAmount("");
      setSuccess(true);
      setStatement("Payment Successful!")
    } else {
      setSuccess(false);
      setStatement("Payment Failed!")
    }
  }

  return (
    <div>
      <Appbar user={user.firstname} />
      <div className="h-screen bg-slate-300 flex justify-center items-center">
        <div className="bg-white rounded-lg w-[80%] sm:w-[50%] lg:w-[23%] text-center p-6">
          <div className="flex flex-col">
            <Heading label={"Send Money"} />
            <div className="flex items-center mt-10">
              <div className="flex justify-center items-center w-12 h-12 bg-blue-400 rounded-full">
                <img
                  src={`https://api.dicebear.com/9.x/initials/svg?seed=${name}`}
                  className="h-[90%] w-[90%] rounded-full"
                />
              </div>
              <div className="font-bold text-xl  ml-3">{name}</div>
            </div>
            <div className="mt-1">
              <label className="flex flex-col">
                <span className="block font-semibold text-sm self-start">
                  Amount (in RS)
                </span>
                <input
                  type="text"
                  placeholder="Enter amount"
                  name="amount"
                  value={amount}
                  onChange={handleChange}
                  className="w-full px-2 mt-2 py-1 border rounded border-blue-200"
                />
              </label>
            </div>
            <button
              onClick={handleClick}
              className="my-3 bg-blue-500 w-full px-5 py-2 rounded text-white font-semibold hover:cursor-pointer hover:bg-blue-900 focus:scale-[1.01] transition-all duration-200"
            >
              Initiate Transfer
            </button>
             {/* <div className="font-medium  text-green-600 text-lg mt-2">
                {statement}
              </div> */}
            {statement==="Payment Successful!"?<div className="font-medium  text-green-600 text-lg mt-2">
               {statement}
              </div>: <div className="font-medium  text-red-600 text-lg mt-2">
               {statement}
              </div>}
            {/* {success && (
              <div className="font-medium  text-green-600 text-lg mt-2">
                Payment Success!
              </div>
            )}
            {!success && (
              <div className="font-medium  text-red-600 text-lg mt-2">
               Payment Failed!
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendMoney;
