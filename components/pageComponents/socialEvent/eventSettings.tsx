import { EventType } from "@/components/types/pages/socialEventPage";
import { useState } from "react";
import styles from "../../../styles/socialEvent.module.scss";

interface ISettingrProp {
  eventData: EventType;
  setEventData(eventDate: EventType): any;
}
const EventSetting: React.FC<ISettingrProp> = ({eventData, setEventData}) => {
  const [isManualApprove, setIsManualApprove] = useState<boolean>(false);
  const [isPublic, setIsPublic] = useState<boolean>(false);
  const [isCurated, setIsCurated] = useState<boolean>(false);
  const [isCommunity, setIsCommunity] = useState<boolean>(false);
  const [tags, setTags] = useState<Array<string>>([]);

  const Tags = ['Engineering', 'Product', 'Marketing', 'Design'];

  const handleTag = (tag: string) => {
    const taggedList = tags;
    if(!taggedList.includes(tag)){
        taggedList.push(tag);
    }
    setTags(taggedList);
    const EventData = eventData;
    EventData.tags = taggedList;
    setEventData(EventData);
  }
  const handleRemoveTag = (tag: string) => {
    const taggedList = tags;
    const indexOfTag = taggedList.indexOf(tag);
    if(indexOfTag > -1){
        taggedList.splice(indexOfTag, 1);
    }
    setTags(taggedList);
    const EventData = eventData;
    EventData.tags = taggedList;
    setEventData(EventData);
    console.log()
  }

  return (
    <>
      <div className={`${styles.settings}`}>
        <div className={`${styles.settingLabel}`}>
          <span>Settings</span>
        </div>
        <div className="form-check mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            onChange={(e) => {
              setIsManualApprove(e.target.checked);
              const EventData = eventData;
              EventData.isManualApprove = e.target.checked;
              console.log(e.target.checked);
              setEventData(EventData);
            }}
          />
          <label
            className={`form-check-label ${styles.checkboxLabel}`}
            htmlFor="flexCheckDefault"
          >
            I want to approve attendees
          </label>
        </div>
        <div className="mt-4">
          <span className={`${styles.settingSectionName}`}>Privacy</span>
          <div className="d-flex justify-content-between w-75 mt-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(e) => {
                  setIsPublic(e.target.checked);
                  const EventData = eventData;
                  EventData.privacy = "public";
                  setEventData(EventData);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Public
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(e) => {
                  setIsCurated(e.target.checked);
                  const EventData = eventData;
                  EventData.privacy = "Curated Audience";
                  setEventData(EventData);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Curated Audience
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                onChange={(e) => {
                  setIsCommunity(e.target.checked);
                  const EventData = eventData;
                  EventData.privacy = "Community Only";
                  setEventData(EventData);
                }}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Community Only
              </label>
            </div>
          </div>
        </div>

        <div className="mt-4 d-grid">
          <span className={`${styles.settingSectionName}`}>
            Tag your social
          </span>
          <span className={`${styles.settingSectionSubText}`}>
            Pick tags for our curation engine to work its magin
          </span>
          <div className="d-flex mt-3">
            
            {tags &&
              tags.map((tag) => {
                return (
                  <>
                    <div className={styles.filterPills}>
                      {tag}
                      <span className={styles.removeFilter} onClick={()=>{
                        handleRemoveTag(tag);
                      }}>
                        <img
                          src={`/close_icon.png`}
                          alt="Close"
                          className={styles.closeButtonFilterPill}
                        />
                      </span>
                    </div>
                  </>
                );
              })}
          </div>

          <div className="d-flex mt-2">
            {Tags &&
              Tags.map((tag) => {
                return (
                  <>
                    <div className={styles.tagPills} onClick={()=>{
                        handleTag(tag);
                    }}>{tag}</div>
                  </>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};
export default EventSetting