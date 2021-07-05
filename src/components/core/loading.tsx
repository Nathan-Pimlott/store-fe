import React from "react";
import Lottie from "react-lottie";

import * as animationData from "../../assets/lottie/loading.json";

export default () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice",
        },
    };

    return (
        <div style={{ height: "100%", display: "flex" }}>
            <Lottie
                options={defaultOptions}
                height={400}
                width={400}
                isStopped={false}
                isPaused={false}
                style={{ margin: "auto" }}
            />
        </div>
    );
};
