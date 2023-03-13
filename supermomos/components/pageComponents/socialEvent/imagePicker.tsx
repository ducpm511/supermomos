import { EventType } from "@/components/types/pages/socialEventPage";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import styles from "../../../styles/socialEvent.module.scss";
interface IImagePickerProp {
  eventData: EventType;
  setEventData(eventDate: EventType): any;
}
const ImagePicker: React.FC<IImagePickerProp> = ({eventData, setEventData}) => {
  const [show, setShow] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number>(0);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const bannerList = [
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_1.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_2.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_3.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_4.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_5.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_6.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_7.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_8.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_9.jpg",
    "https://supermomos-app-resources-us.s3.amazonaws.com/Images/SocialBanner/banner_10.jpg",
  ];

  const handleSave = () => {
    const EventData = eventData;
    EventData.banner = bannerList[selectedIdx];
    setEventData(EventData);
    setShow(false);
    console.log(EventData);
  };
  return (
    <>
      <div className="col-7">
        <div
          className={`${styles.imagePicker}`}
          onClick={() => {
            handleShow();
          }}
        >
          <div className={`d-flex ${styles.imagePickerLabel}`}>
            <img src="/image_icon.png" alt="" />
            <span>Add a banner</span>
          </div>
        </div>
      </div>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Choose a banner
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={`${styles.imageWrapper}`}>
            {bannerList &&
              bannerList.map((image, idx) => {
                return (
                  <>
                    <div
                      className={`${styles.imageThumbnail}`}
                      key={idx}
                      onClick={() => {
                        setSelectedIdx(idx);
                      }}
                    >
                      {idx == selectedIdx ? (
                        <>
                          <img
                            src={image}
                            alt=""
                            className={`w-100 ${styles.imageSelected}`}
                          />
                        </>
                      ) : (
                        <>
                          <img src={image} alt="" className="w-100" />
                        </>
                      )}
                    </div>
                  </>
                );
              })}
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} className={styles.btnClose}>Close</Button>
          <Button onClick={handleSave} className={styles.btnSave}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default ImagePicker;