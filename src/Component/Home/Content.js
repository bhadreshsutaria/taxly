import React from "react";

const Star = (props) => {
    return(
        <>
        <svg className="star star_half rating" data-rating={props.dataRatingHalf} height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
            <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515zm-11.676 8.261a.92.92 0 01.476-.147c.155 0 .306.049.452.147l4.59 2.427-.928-5.148c0-.147.024-.298.073-.453.049-.156.122-.315.22-.478l3.76-3.555-5.103-.735a.713.713 0 01-.464-.184 5.548 5.548 0 01-.366-.33L11.69 3.382l-.415 13.163z"></path>
        </svg>
        <svg className="star rating" data-rating={props.dataRating} height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 23 22">
            <path fill="#05F29B" fillRule="evenodd" d="M22.95 8.285a.823.823 0 00-.293-.466 1.659 1.659 0 00-.537-.27l-6.664-.93L12.429.563C12.282.188 11.973 0 11.5 0c-.472 0-.781.188-.927.564L7.546 6.52.98 7.55a.77.77 0 00-.55.22 1.83 1.83 0 00-.378.515c-.065.213-.07.417-.012.613a.764.764 0 00.305.441l4.81 4.707-1.148 6.692a.943.943 0 00.049.6c.081.188.203.34.366.454.146.098.321.163.525.196.203.032.41 0 .622-.098l5.932-3.138 5.932 3.138h.537c.098 0 .2-.02.305-.062.106-.04.208-.094.306-.159a.904.904 0 00.366-.429.943.943 0 00.049-.6l-1.148-6.692 4.81-4.707a.887.887 0 00.304-.441.745.745 0 00-.012-.515z"></path>
        </svg>
        </>
    );
};

export {Star};