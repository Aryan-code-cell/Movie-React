import {removemovie} from "../reducers/MovieSlice";
import axios from "../../utils/axios";
import {loadmovie} from "../reducers/MovieSlice";

export const asyncloadmovie = (id) => async (dispatch, getState) => {
    try{
        const details = await axios.get(`/movie/${id}`);
        const externalid = await axios.get(`/movie/${id}/external_ids`);
        const recommendation = await axios.get(`/movie/${id}/recommendations`);
        const similar = await axios.get(`/movie/${id}/similar`);
        const translations = await axios.get(`/movie/${id}/translations`);
        const videos = await axios.get(`/movie/${id}/videos`);
        const watchproviders = await axios.get(`/movie/${id}/watch/providers`);

        let theultimatedetails = {
            details: details.data,
            externalid: externalid.data,
            recommendation: recommendation.data.results,
            similar: similar.data.results,
            translations: translations.data.translations.map((t) => t.english_name),
            videos: videos.data.results.find((m) => m.type === "Trailer"),
            watchproviders: watchproviders.data.results.IN
        }

        dispatch(loadmovie(theultimatedetails));
        // console.log(theultimatedetails);
    }

    catch(error)
    {
        console.log("Error: ", error);
    }
};
