import { shallowRef } from 'vue';
import IconFacebook from '@/components/icons/IconFacebook.vue';
import IconInstagram from '@/components/icons/IconInstagram.vue';
import IconGithub from '@/components/icons/IconGithub.vue';

const socialMedia = [
  {
    id: 1,
    label: "Facebook",
    url: "https://www.facebook.com/",
    icon: shallowRef(IconFacebook),
  },
  {
    id: 2,
    label: "Instagram",
    url: "https://www.instagram.com/alifbimapradana07",
    icon: shallowRef(IconInstagram),
  },
  {
    id: 3,
    label: "Github",
    url: "https://github.com/4lifbima",
    icon: shallowRef(IconGithub),
  },
];

export default socialMedia;
