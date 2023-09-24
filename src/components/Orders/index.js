import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ActionTypes } from "../../redux/Reducer/ActionTypes";
import { MdDeleteOutline } from "react-icons/md";

const Basket = () => {
  const dispatch = useDispatch();

  const save = (favorite) => {
    localStorage.setItem("basket", JSON.stringify(favorite));
  };

  const basket = useSelector((state) => {
    return state.basket.basket;
  });

  useEffect(() => {
    save(basket);
  }, [basket]);

  useEffect(() => {
    dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: basket });
  }, [dispatch]);

  const addToBaskets = (el) => {
    dispatch({ type: ActionTypes.ADD_TO_BASKET, payload: el });
  };

  const addToBaskets1 = (el) => {
    dispatch({ type: ActionTypes.ADD_TO_BASKETS, payload: el });
  };

  return (
    <div id="basket">
      <div className="container">
        <div className="relative overflow-x-auto py-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-white dark:text-gray-400">
              <tr>
                <th scope="col" className="px-20 py-3 text-2xl">
                  Product name
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Image
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Count
                </th>
                <th scope="col" className="px-6 py-3 text-2xl">
                  Price
                </th>
                <th
                  onClick={() => {
                    dispatch({ type: ActionTypes.DELETE_FAVORITE });
                    localStorage.removeItem("basket");
                  }}
                  style={{
                    cursor: "pointer",
                  }}
                  scope="col"
                  className="px-6 py-3 text-2xl"
                >
                  <MdDeleteOutline />
                </th>
              </tr>
            </thead>
            <tbody className="">
              {basket.slice(1, basket.length + 1).map((el) => (
                <tr className="bg-white dark:bg-white" key={el.id}>
                  <td
                    scope="row"
                    className="px-6 py-4 text-2xl font-medium text-gray-900 whitespace-nowrap dark:text-black"
                  >
                    {el.title}
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <img
                      style={{
                        borderRadius: "20px",
                      }}
                      width={200}
                      src={el.image}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    <div className="flex m-40">
                      <button
                        style={{
                          display: el.count === 1 ? "none" : "block",
                        }}
                        className="btn2"
                        onClick={() => addToBaskets1(el)}
                      >
                        -
                      </button>
                      <h1
                        style={{
                          fontSize: "30px",
                        }}
                        className="m-2"
                      >
                        {el.count}
                      </h1>
                      <button className="btn1" onClick={() => addToBaskets(el)}>
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-2xl">
                    $ {el.price * el.count}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Basket;
