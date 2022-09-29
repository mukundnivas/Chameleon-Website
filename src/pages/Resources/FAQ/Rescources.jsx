import React from "react";
import "./index.css";
import { Collapse, Calendar } from "antd";
const { Panel } = Collapse;

function Resources() {
  const collapseData = [
    {
      title: "What is an Internet of Things (IoT)Device?",
      content:
        "The Internet of Things (IoT) is an ecosystem consisting of web-enabled smart devices such as smart phones, suburban traffic systems and domestic appliances (to name a few). There is an immense number of these connected devices which all use embedded systems, such as processors, sensors, and communication hardware, to collect, send and act on data they acquire from their environments.",
    },
    {
      title: "Where is your company located",
      content:
        "We are in Melbourne, Australia. However, we have staff working for us across the globe. This gives us a unique perspective and the ability to work with multiple service providers.",
    },
    {
      title: "Do you work with international clients?",
      content:
        "Due to our global reach and staff locale, we do work with international clients. Our talents are not limited to Australia!",
    },
    {
      title: "How can I engage you for your services?",
      content:
        "If you think our services would be appropriate for your organisation, please reach out to us by navigating to the ‘Contact Us’ tab in the top right and get in touch using the most suitable avenue that is suitable for you.",
    },
    {
      title: "Do you provide ongoing support for your systems?",
      content:
        "We have ongoing support available for our clients, this is to ensure that they are operating effectively, and we can roll out updates and improvements to any systems we implement.",
    },
  ];

  const onPanelChange = () => {

  }

  return (
    <div className="resources">
      <div className="head">
        <div></div>
        <div>Resources Centre</div>
        <div></div>
      </div>
      <div className="main">
        <div className="calendar-box content-box">
          <Calendar fullscreen={false} onPanelChange={onPanelChange} />
        </div>
        <div className="collapse-box content-box">
          <h2>Frequently Asked Questions</h2>
          <div className="title">
            <p></p>
            <p>The Chameleon Questions and answers.</p>
          </div>

          <div role="tablist">
            {collapseData.map((collapse, index) => {
              return (
                <div className="cardBox">
                  <Collapse
                    visible
                    ghost
                    expandIconPosition="end"
                    accordion="my-accordion"
                    className="collapse"
                    role="tabpanel"
                  >
                    <Panel header={collapse.title}>
                      <p className="text">{collapse.content}</p>
                    </Panel>
                  </Collapse>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="box2"> </div>
    </div>
  );
}

export default Resources;