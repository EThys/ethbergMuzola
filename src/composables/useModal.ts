import { ref } from 'vue';

const isModalOpen = ref(false);

export const useModal = () => {
  const openModal = () => {
    isModalOpen.value = true;
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    isModalOpen.value = false;
    document.body.style.overflow = '';
  };

  return {
    isModalOpen,
    openModal,
    closeModal,
  };
};

