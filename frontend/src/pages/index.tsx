/* eslint-disable canonical/filename-match-exported */
import Button from '../components/Button';
import Modal from '../components/Modal';
import { styles } from '../styles';
import { type NextPage } from 'next';
import { useState } from 'react';

const Index: NextPage = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  function handleModalClose() {
    setModalOpen(false);
  }
  return (
    <>
      <h1>Welcome to Contra!</h1>
      <h2>Basic Demo</h2>
      <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
      <Button>Useless button for focus trap</Button>

      <Modal
        containerId="modal-container"
        isOpen={isModalOpen}
        onClose={handleModalClose}
      >
        <div style={styles['modal']}>
          <h2>Signup for our newsletter!</h2>
          <form onSubmit={handleModalClose} style={styles['modalForm']}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <label>
              Email:
              <input type="text" name="email" />
            </label>
            <Button type="submit">Submit</Button>
          </form>
          <Button onClick={handleModalClose}>Cancel</Button>
        </div>
      </Modal>

      <div id="modal-container" />
    </>
  );
};

export default Index;
