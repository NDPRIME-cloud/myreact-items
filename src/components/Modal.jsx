
// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 24,
//   p: 4,
// };

// export default function TransitionsModal(text, topic) {
//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//   return (
//     <div>
//       <Button onClick={handleOpen}>Open modal</Button>
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         onClose={handleClose}
//         closeAfterTransition
//         slots={{ backdrop: Backdrop }}
//         slotProps={{
//           backdrop: {
//             timeout: 500,
//           },
//         }}
//       >
//         <Fade in={open}>
//           <Box sx={style}>
//             <Typography id="transition-modal-title" variant="h6" component="h2">
//              {topic}
//             </Typography>
//             <Typography id="transition-modal-description" sx={{ mt: 2 }}>
//             {text}
//             </Typography>
//           </Box>
//         </Fade>
//       </Modal>
//     </div>
//   );
// }



// Modal.jsx
import React from "react";

const Modal = ({ show, onClose, message, top , dive}) => {
  if (!show) return null; // 🧠 don't render if 'show' is false

  return (
    <div className="modal-overlay" onClick={dive}>
      <div className="modal-content">
        <h1>{top}</h1>
        <p>{message}</p>
        <button className="modalbtn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default Modal;

