// Projects Data Centralized
export interface Project {
  id: string;
  tag: { vi: string, en: string };
  tagColor: string;
  title: { vi: string, en: string };
  model: { vi: string, en: string };
  image: string;
  location: { vi: string, en: string };
  desc: { vi: string, en: string };
  challenge: { vi: string, en: string };
  solution: { vi: string, en: string };
  overview: { vi: string, en: string };
  specs: { vi: string, en: string }[];
  result: { vi: string, en: string };
  featured: boolean;
}

export const PROJECTS_DATA: Project[] = [
  {
    id: 'sun-group',
    tag: { vi: 'Sân thể thao', en: 'Sports Venue' },
    tagColor: 'accent',
    title: {
      vi: 'Sân Pickleball Ven Đê 4',
      en: 'Ven De 4 Pickleball Court'
    },
    model: {
      vi: 'Pickleball · VAR Replay',
      en: 'Pickleball · VAR Replay'
    },
    image: '/assets/VNVAR assets/IMG/652136528_122161075808731210_5380463322729828341_n.jpg ',
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    desc: {
      vi: 'Triển khai hệ thống VAR Replay và bảng điểm thông minh tại Sân Pickleball Ven Đê 4, mang lại trải nghiệm thi đấu chuyên nghiệp và minh bạch.',
      en: 'Implementing VAR Replay system and smart scoreboard at Ven De 4 Pickleball Court, providing a professional and transparent competition experience.'
    },
    challenge: {
      vi: 'Yêu cầu tích hợp hệ thống quay chậm (Slow-motion) với độ trễ thấp trên hạ tầng sân ngoài trời.',
      en: 'Requiring low-latency slow-motion system integration on outdoor court infrastructure.'
    },
    solution: {
      vi: 'Sử dụng hệ thống camera 4K tốc độ cao kết hợp phần mềm phân tích VAR của VNVAR, vận hành ổn định trong mọi điều kiện thời tiết.',
      en: 'Using high-speed 4K cameras combined with VNVAR analysis software, operating stably in all weather conditions.'
    },
    overview: {
      vi: 'Dự án trọng điểm cung cấp giải pháp công nghệ toàn diện cho cụm sân Pickleball, bao gồm VAR, livestream và quản lý vận hành tự động.',
      en: 'Key project providing comprehensive tech solutions for Pickleball clusters, including VAR, livestream, and automated management.'
    },
    specs: [
      { vi: 'Hệ thống Camera VAR 4K đa góc quay', en: 'Multi-angle 4K VAR Camera system' },
      { vi: 'Màn hình check VAR chuyên dụng ngoài trời', en: 'Specialized outdoor VAR check screens' },
      { vi: 'Phần mềm quản lý sân và đặt lịch trực tuyến', en: 'Court management and online booking software' },
      { vi: 'Hệ thống Livestream tự động lên mạng xã hội', en: 'Automated social media livestream system' }
    ],
    result: {
      vi: 'Tăng 30% hiệu suất vận hành và thu hút lượng lớn vận động viên nhờ trải nghiệm công nghệ VAR độc đáo.',
      en: 'Increased operating efficiency by 30% and attracted a large number of athletes thanks to the unique VAR technology experience.'
    },
    featured: true,
  },
  {
    id: 'toco-toco',
    tag: { vi: 'Hệ thống sân', en: 'Court System' },
    tagColor: 'brand',
    title: {
      vi: 'Sân Pickleball Tsunami Lê Văn Thiêm',
      en: 'Tsunami Le Van Thiem Pickleball Court'
    },
    model: {
      vi: 'Pickleball · Smart Venue',
      en: 'Pickleball · Smart Venue'
    },
    image: '/assets/VNVAR assets/IMG/cebde3af-4656-49ed-a6e8-69848b2bbfb7.jpg',
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    desc: {
      vi: 'Giải pháp quản lý vận hành và hiển thị thông tin thông minh cho tổ hợp sân Pickleball Tsunami tại khu vực Thanh Xuân.',
      en: 'Smart operation management and information display solution for Tsunami Pickleball complex in Thanh Xuan area.'
    },
    challenge: {
      vi: 'Quản lý đồng bộ nhiều sân đấu cùng lúc và tích hợp hệ thống bảng điểm với ứng dụng di động của người chơi.',
      en: 'Managing multiple courts simultaneously and integrating scoreboard system with players\' mobile apps.'
    },
    solution: {
      vi: 'Triển khai nền tảng quản lý tập trung VNVAR Cloud kết hợp hệ thống bảng điểm LED đồng bộ thời gian thực.',
      en: 'Deploying VNVAR Cloud centralized management platform combined with real-time synchronized LED scoreboard system.'
    },
    overview: {
      vi: 'Số hóa toàn diện trải nghiệm tại sân Pickleball Tsunami, từ khâu đặt sân đến việc theo dõi tỉ số và xem lại các pha bóng hay.',
      en: 'Fully digitizing the experience at Tsunami Pickleball court, from booking to score tracking and rewatching highlights.'
    },
    specs: [
      { vi: 'Hệ thống bảng điểm thông minh Smart Scoreboard', en: 'Smart Scoreboard system' },
      { vi: 'Tích hợp hệ thống thanh toán và đặt sân tự động', en: 'Integrated automated payment and booking system' },
      { vi: 'Màn hình quảng cáo và hiển thị thông tin giải đấu', en: 'Tournament info and advertising displays' },
      { vi: 'Công nghệ phân tích video AI cho các pha bóng', en: 'AI video analysis for highlight plays' }
    ],
    result: {
      vi: 'Tối ưu hóa quy trình đặt sân, giảm 50% khối lượng công việc quản lý thủ công cho chủ đầu tư.',
      en: 'Optimized booking process, reduced manual management workload for investors by 50%.'
    },
    featured: true,
  },
  {
    id: 'amway',
    tag: { vi: 'Giải trí', en: 'Entertainment' },
    tagColor: 'brand',
    title: {
      vi: 'Quán Bida Hồng Tiến',
      en: 'Hong Tien Billiards Club'
    },
    model: {
      vi: 'Billiards · Smart Display',
      en: 'Billiards · Smart Display'
    },
    image: '/assets/VNVAR assets/IMG/ce979d27-f27c-4590-96c1-42fec78ab7eb.png',
    location: { vi: 'Hà Nội', en: 'Hanoi' },
    desc: {
      vi: 'Nâng cấp hệ thống hiển thị và quản lý dịch vụ tại Quán Bida Hồng Tiến, tạo không gian giải trí hiện đại.',
      en: 'Upgrading display and service management system at Hong Tien Billiards Club, creating a modern entertainment space.'
    },
    challenge: {
      vi: 'Đồng bộ hóa hệ thống tính giờ, bảng điểm và dịch vụ gọi món tại bàn.',
      en: 'Synchronizing timing system, scoreboard, and table-side ordering service.'
    },
    solution: {
      vi: 'Sử dụng màn hình chuyên dụng tích hợp phần mềm quản lý VNVAR để điều phối hoạt động kinh doanh.',
      en: 'Using professional displays integrated with VNVAR management software to coordinate business activities.'
    },
    overview: {
      vi: 'Giải pháp toàn diện cho câu lạc bộ Bida hiện đại, kết hợp giữa hiển thị quảng cáo và hỗ trợ vận hành.',
      en: 'Comprehensive solution for modern Billiards clubs, combining advertising display and operational support.'
    },
    specs: [
      { vi: 'Màn hình hiển thị bảng điểm và thời gian chơi', en: 'Scoreboard and playtime display screens' },
      { vi: 'Hệ thống Menu điện tử và gọi món tại bàn', en: 'Electronic menu and table-side ordering system' },
      { vi: 'Quản lý doanh thu và khách hàng tập trung', en: 'Centralized revenue and customer management' },
      { vi: 'Hệ thống livestream các trận đấu bida hay', en: 'Livestream system for great billiards matches' }
    ],
    result: {
      vi: 'Tăng tính chuyên nghiệp cho quán, khách hàng hài lòng hơn với dịch vụ minh bạch và nhanh chóng.',
      en: 'Increased professionalism, customers more satisfied with transparent and fast service.'
    },
    featured: false,
  },
  {
    id: 'hospital',
    tag: { vi: 'Khu đô thị', en: 'Urban Area' },
    tagColor: 'brand',
    title: {
      vi: 'Sân Pickleball Eco Park',
      en: 'Eco Park Pickleball Court'
    },
    model: {
      vi: 'Residential · Sports',
      en: 'Residential · Sports'
    },
    image: '/assets/VNVAR assets/IMG/Thiết kế chưa có tên.png',
    location: { vi: 'Hà Nội', en: 'Hà Nội' },
    desc: {
      vi: 'Cung cấp hệ thống quản lý và Livestream tự động cho cụm sân Pickleball tại khu đô thị Eco Park.',
      en: 'Providing automated management and Livestream system for Pickleball court clusters in Eco Park urban area.'
    },
    challenge: {
      vi: 'Triển khai hệ thống tự động hóa hoàn toàn để cư dân có thể tự đặt sân và nhận video thi đấu.',
      en: 'Implementing full automation so residents can self-book courts and receive match videos.'
    },
    solution: {
      vi: 'Hệ thống Smart Venue của VNVAR tích hợp vào ứng dụng cư dân, tự động hóa quy trình từ đặt sân đến ghi hình.',
      en: 'VNVAR Smart Venue system integrated into the resident app, automating the process from booking to recording.'
    },
    overview: {
      vi: 'Dự án mang lại tiện ích thể thao đẳng cấp cho cư dân Eco Park với các công nghệ hỗ trợ thi đấu hiện đại nhất.',
      en: 'Project providing world-class sports amenities for Eco Park residents with the most modern competition support techs.'
    },
    specs: [
      { vi: 'Hệ thống Camera ghi hình tự động', en: 'Automated recording camera system' },
      { vi: 'Bảng điểm thông minh kết nối Mobile App', en: 'Smart scoreboard connected to Mobile App' },
      { vi: 'Cổng kiểm soát ra vào tự động qua mã QR', en: 'Automated access control via QR code' },
      { vi: 'Nền tảng chia sẻ khoảnh khắc thể thao cộng đồng', en: 'Community sports moment sharing platform' }
    ],
    result: {
      vi: 'Tạo sân chơi công nghệ cao cho cộng đồng, tối ưu chi phí nhân sự vận hành cho ban quản lý.',
      en: 'Created a high-tech playground for the community, optimized personnel operating costs for management.'
    },
    featured: false,
  },
  {
    id: 'tan-son-nhat-t3',
    tag: { vi: 'Học viện thể thao', en: 'Sports Academy' },
    tagColor: 'brand',
    title: {
      vi: 'Sân Pickleball Pika Academy',
      en: 'Pika Academy Pickleball Court'
    },
    model: {
      vi: 'Academy · Training Tech',
      en: 'Academy · Training Tech'
    },
    image: '/assets/VNVAR assets/IMG/751600d38d61451e942d28bdbf4964e7.jpg',
    location: { vi: 'TP.HCM', en: 'HCMC' },
    desc: {
      vi: 'Ứng dụng công nghệ VAR và phân tích hình ảnh vào công tác đào tạo tại Học viện Pickleball Pika.',
      en: 'Applying VAR technology and image analysis to training at Pika Pickleball Academy.'
    },
    challenge: {
      vi: 'Hỗ trợ huấn luyện viên phân tích kỹ thuật của học viên qua video quay chậm ngay tại sân.',
      en: 'Supporting coaches in analyzing students\' techniques via slow-motion video right on the court.'
    },
    solution: {
      vi: 'Lắp đặt hệ thống màn hình cảm ứng và camera quay chậm chuyên sâu phục vụ phân tích kỹ thuật.',
      en: 'Installing touch screen systems and intensive slow-motion cameras for technical analysis.'
    },
    overview: {
      vi: 'Học viện Pika Academy được trang bị những công nghệ tiên tiến nhất để hỗ trợ người chơi từ cơ bản đến nâng cao.',
      en: 'Pika Academy is equipped with the latest technologies to support players from basic to advanced levels.'
    },
    specs: [
      { vi: 'Hệ thống Video phân tích kỹ thuật chuyên sâu', en: 'Intensive technical analysis video system' },
      { vi: 'Màn hình tương tác dành cho huấn luyện viên', en: 'Interactive displays for coaches' },
      { vi: 'Lưu trữ và chia sẻ video bài tập qua Cloud', en: 'Storage and sharing of exercise videos via Cloud' },
      { vi: 'Hệ thống âm thanh thông báo và chỉ dẫn', en: 'Public address and guidance sound system' }
    ],
    result: {
      vi: 'Nâng cao chất lượng đào tạo, giúp học viên tiến bộ nhanh hơn 40% thông qua việc xem lại lỗi kỹ thuật.',
      en: 'Improved training quality, helping students progress 40% faster by reviewing technical errors.'
    },
    featured: true,
  },
];
