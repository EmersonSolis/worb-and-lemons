"use client";
import Image from "next/image";
import { useEffect, useRef } from 'react';
import { setupAnimation } from "./animation.js";
import Style from "./style.module.css";

export default function Home() {
    const mainRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const cleanup = setupAnimation(); 

        return () => {
        cleanup?.(); 
        };
    }, []); 

  return (
    <main className={Style.main}>
        <div className={Style.container}>
            <div className={Style.topSection}>
                <h1 className={Style.tittle}>WORB & LEMONS</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolorum nostrum voluptas harum inventore hic et pariatur. Quia nobis repellat, ipsa omnis autem aspernatur dolorem cupiditate beatae dolorum laboriosam esse.
                </p>
            </div>
        <div>
            <div className={[Style.timeline,  "timelineAnim"].join(" ")}>
                <div className={"Style.line lineAnim"}></div>
                <div className={"Style.section sectionAnim"}>
                    <div className={Style.bead}></div>
                    <div className={Style.content}>
                        <h2>L</h2>
                        <p>
                            Love for Citrus.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={`${Style.section} section `}>
                <div className={Style.bead}></div>
                    <div className={Style.content}>
                        <h2>E</h2>
                        <p>
                            Exquisite Flavor.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={`${Style.section} section `}>
                <div className={Style.bead}></div>
                    <div className={Style.content}>
                        <h2>M</h2>
                        <p>
                            Multiple Uses.
                            <br/>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={`${Style.section} section `}>
                <div className={Style.bead}></div>
                    <div className={Style.content}>
                        <h2>O</h2>
                        <p>
                            Overcoming Bitterness.
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


                <div className={`${Style.section} section `}>
                <div className={Style.bead}></div>
                    <div className={Style.content}>
                        <h2>N</h2>
                        <p>
                            Natural Refreshment
                            <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea mollitia rem veritatis eligendi sit excepturi culpa possimus, optio quae corrupti! Voluptas vel odit ab quae, dicta sapiente reprehenderit minima magni.
                        </p>
                    </div>
                </div>


            </div>
        </div>
      </div>
    


    </main>
  );

  
}
