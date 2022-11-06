import React from "react";
import { FaLink } from "react-icons/fa";
import { getColor, getColorBg } from "../../utils/getColor";
import "./element.css";
// Modal Imports
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import ElementInfo from "../elementInfo/ElementInfo";

const Element = ({ element }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = getColor(element.type);
  console.log("bgColor", bgColor);
  return (
    <>
      <div
        className="elementMain"
        style={{ backgroundColor: bgColor }}
        onClick={onOpen}
      >
        <div className="element">
          <div className="elementHeader">
            <div className="elementAtomNum">{element.atomNum}</div>
            <div className="elementLicense">
              {element.license.toUpperCase()}
            </div>
          </div>
          <div className="elementBody">
            <div className="elementShortName">{element.shortName}</div>
          </div>
          <div className="elementFooter">
            <div className="elementName">{element.name}</div>
          </div>
        </div>
      </div>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader style={{ fontFamily: "Oswald" }}>
            {/* {element.name} */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ElementInfo element={element} />
          </ModalBody>

          <ModalFooter>
            {/* <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button> */}
            <a href={element.link} target="_blank">
              <Button leftIcon={<FaLink />} colorScheme="linkedin" mr={3}>
                Go to website
              </Button>
            </a>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Element;