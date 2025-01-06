import React, { useState, useEffect } from "react";
import "./data_ring.css";
import Searchbar from "../../components/search/Searchbar";
import { createButton, createButtons } from "../../defaultCSS/Button";
import ImageButton from "../../components/buttons/ImageButton";
import plus from "../../assets/icons/plus.svg";
import Modal from "../../components/modal/Modal";
import { CreateDataRing } from "./Create";
import WordButton from "../../components/buttons/WordButton";
import { createDaataRingModalProperties } from "../../defaultCSS/Modal";

export default function SearchDataRing() {
  const [dataRingSearch, setDataRingSearch] = useState<string>("");
  const handleSearch = (result: string) => {
    setDataRingSearch(result);
  };

  useEffect(() => {
    console.log("Data ring Search: " + dataRingSearch);
  }, [dataRingSearch]);

  const [openCreateDataRing, setOpenCreateDataRing] = useState<boolean>(false);

  const toggleCreateDataRingModal = () => {
    setOpenCreateDataRing(!openCreateDataRing);
  };

  return (
    <div className="data_ring-page">
      <Searchbar onSearch={handleSearch} />
      <div className="data-ring-create-button">
        <WordButton
          text="Create"
          onClick={toggleCreateDataRingModal}
          {...createButtons}
        />
      </div>
      <div className="data-ring-create">please please please</div>{" "}
      <Modal
        show={openCreateDataRing}
        hide={toggleCreateDataRingModal}
        content={<CreateDataRing />}
        title="Create Data Ring"
        {...createDaataRingModalProperties}
      />
    </div>
  );
}
