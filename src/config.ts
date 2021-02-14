const YT_API_KEY = "AIzaSyBogyy2xbK_VARlmcCiDrkYu5en6Iv97UI";
//const YT_PLAYLIST_ID = "PLc6UWFdYNlhOOTEBUDttyDgbi19cbp6Eh";
const YT_PLAYLIST_ID = "PLc6UWFdYNlhOSPixucdCDcS73Ey7i5cA3";
export const YT_API = {
  playlist_items: `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${YT_PLAYLIST_ID}&key=${YT_API_KEY}`
};
