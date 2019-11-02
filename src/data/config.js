const config = {
  SHEET_ID: "10YOTLGf803jrAFnugIMZJWg9pOFBAA6NtXJhllLzj3I",
  API_KEY: 'AIzaSyAdCi7dpmqJ5XKMeoxKJXAL0x8822wsCBY',
  API_BASE: "https://sheets.googleapis.com/v4/spreadsheets/",
  url: function(dataRange){
    return this.API_BASE + this.SHEET_ID + "/values/" + dataRange + '?key=' + this.API_KEY;
  }
}

export default config;