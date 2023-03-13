import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styles from "../styles/socialEvent.module.scss";
import NavBar from "../components/pageComponents/socialEvent/nav";
import EventDetails from "../components/pageComponents/socialEvent/eventDetails";
import ImagePicker from "../components/pageComponents/socialEvent/imagePicker";
import EventSetting from "../components/pageComponents/socialEvent/eventSettings";
import { EventType } from "@/components/types/pages/socialEventPage";
import { Button, Modal } from "react-bootstrap";

const SocialEvent: NextPage = () =>{
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const initialEventData = {
      title: "",
      startAt: new Date().toISOString(),
      venue: "",
      capacity: 0,
      price: 0,
      description: "",
      banner: "",
      tags: [""],
      isManualApprove: false,
      privacy: "",
    };
    const [eventData, setEventData] = useState<EventType>(initialEventData);
    const handleSave = () => {
        console.log("Event data");
        console.log(eventData);
    }
    useEffect(() => {
      setTitle(`Supermomos - Social Event`)
      setDescription(`Create your own event`)
      
    
    }, [])
    return (
      <>
        <Head>
          <title>{title}</title>
          <meta property="og:description" content={description}></meta>
          <meta name="description" content={description}></meta>
        </Head>
        <div className={`${styles.background}`}>
          <div className={`${styles.pageContainer}`}>
            <NavBar />
            <div className="row">
              <EventDetails eventData={eventData} setEventData={setEventData} />
              <ImagePicker eventData={eventData} setEventData={setEventData} />
            </div>
            <div className="row">
              <div className={`col-6 d-grid`}>
                <span className={`${styles.descriptionSectionName} mb-1`}>
                  Description
                </span>
                <textarea
                  className={`${styles.descriptionTextArea} mb-5`}
                  name="description"
                  id=""
                  placeholder="Description of your event..."
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                    const EventData = eventData;
                    EventData.description = e.target.value;
                    setEventData(EventData);
                  }}
                ></textarea>
                <EventSetting
                  eventData={eventData}
                  setEventData={setEventData}
                />
                <div className="w-100 mt-5 mb-5">
                  <button
                    className={`${styles.createBtn} mb-5`}
                    onClick={handleSave}
                  >
                    CREATE SOCIAL
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default SocialEvent;