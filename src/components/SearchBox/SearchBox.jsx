/* eslint-disable react/prop-types */
import { useId } from "react";
import css from "./SearchBox.module.css";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { changeName } from "../../redux/filters/filterSlice";
import { selectNameFilter } from "../../redux/selectorsforApp";

export default function SearchBox() {
  const reduxInput = useSelector(selectNameFilter);
  const id = useId();
  const dispath = useDispatch();
  return (
    <div className={css.container}>
      <label htmlFor={id}>Find contacts by name</label>
      <input
        className={css.input}
        type="text"
        value={reduxInput}
        id={id}
        placeholder="Find your contact"
        onChange={(event) => {
          dispath(changeName(event.target.value));
        }}
      ></input>
    </div>
  );
}
