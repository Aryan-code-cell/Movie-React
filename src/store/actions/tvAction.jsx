import {removetv} from "../reducers/TvSlice";
import axios from "../../utils/axios";
import {loadtv} from "../reducers/TvSlice";

export const asyncloadtv = (id) => async (dispatch, getState) => {
    try{
        const details = await axios.get(`/tv/${id}`);
        const externalid = await axios.get(`/tv/${id}/external_ids`);
        const recommendation = await axios.get(`/tv/${id}/recommendations`);
        const similar = await axios.get(`/tv/${id}/similar`);
        const translations = await axios.get(`/tv/${id}/translations`);
        const videos = await axios.get(`/tv/${id}/videos`);
        const watchproviders = await axios.get(`/tv/${id}/watch/providers`);

        let theultimatedetails = {
            details: details.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t) => t.english_name),
            videos: videos.data.results.find((m) => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN
        }

        dispatch(loadtv(theultimatedetails));
        // console.log(theultimatedetails);
    }

    catch(error)
    {
        console.log("Error: ", error);
    }
};
