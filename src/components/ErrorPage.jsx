import React from "react";
import { Link } from "react-router-dom";
import { useRouteError } from "react-router-dom";
const Status = () => {
  const { status, statusText } = useRouteError();

  return (
    <section className="page_404">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 ">
            <div className="col-sm-10 col-sm-offset-1  text-center">
              <div className="four_zero_four_bg">
                <h1 className="text-center ">{status}</h1>
              </div>

              <div className="contant_box_404">
                <h3 className="text-4xl">{statusText}</h3>

                <p className="text-2xl">something wents wrong</p>

                <Link href="" className="link_404">
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Status;
