import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  createNews,
  deleteNews,
  updateNews,
} from "../../store/actions/newsAction";
const useNews = () => {
  const [news, setNews] = useState("");
  const [buttonLoader, setButtonLoader] = useState(false);
  const [deleteLoader, setDeleteLoader] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [updateUID, setUpdateUID] = useState("");
  const dispatch = useDispatch();
  const onChangeHandler = (e) => {
    setNews(e.target.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setNews(e.target.value);
    if (news.length > 0) {
      dispatch(createNews(news, setButtonLoader));
    } else {
      window.notify("Please Add Some News", "error");
    }
    setNews("");
  };
  const onDeleteHandler = (uid) => {
    dispatch(deleteNews(uid, setDeleteLoader));
  };
  const onUpdateHandler = (item) => {
    setNews(item.newsTitle);
    setUpdateUID(item.uid);
    setIsUpdate(true);
  };
  const onCTAUpdate = (e) => {
    e.preventDefault();
    setNews(e.target.value);
    dispatch(updateNews(news, updateUID, setButtonLoader));
    setIsUpdate(false);
  };
  return {
    buttonLoader,
    news,
    onSubmitHandler,
    onChangeHandler,
    onDeleteHandler,
    onUpdateHandler,
    onCTAUpdate,
    isUpdate,
    deleteLoader,
  };
};

export default useNews;
