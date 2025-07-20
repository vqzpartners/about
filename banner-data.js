// Banner data configuration
// Add new announcements, updates, or important information here

const bannerData = [
  {
    title: "Lulo FinTech platform launches in Panama - Transparent loan advice now available",
    url: "https://lulopanama.com",
    time: "new"
  },
  {
    title: "Phishing Threat Neutralized – What You Need to Know. ",
    url: "https://vqzpartners.launch.ink/p/urgent-security-update",
    time: "alert"
  }
];

// Instructions for updating banner data:
// 
// 1. title: The main message to display in the banner
// 2. url: Where to redirect when banner is clicked (use "#" for no redirect)
// 3. time: Badge type - available options:
//    - "new" → Shows "NEW" badge
//    - "live" → Shows "LIVE" badge  
//    - "update" → Shows "UPDATE" badge
//    - "breaking" → Shows "BREAKING" badge
//    - "soon" → Shows "SOON" badge
//    - "now" → Shows "NOW" badge
//    - "alert" → Shows "ALERT" badge
//    - Any custom text will be displayed as-is in uppercase
//
// To add a new banner, simply add a new object to the bannerData array:
// {
//   title: "Your announcement here",
//   url: "https://your-link.com",
//   time: "alert"
// }
//
// To temporarily disable all banners, comment out the bannerData array or set it to an empty array:
// const bannerData = [];

// Export for use in other files (if using modules)
// export { bannerData };
