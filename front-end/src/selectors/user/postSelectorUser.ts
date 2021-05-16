import { AppState } from "reducers";

export const postSelectorUser = (state: AppState) => ({
    postWeekendTop: state.posts.weekendTop,
    randomPosts: state.posts.randomPosts
});
