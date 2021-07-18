import { useEffect } from 'react';
import useStorage2 from '../../hooks/useStorage2';
import { motion } from 'framer-motion';
const ProgressBar = ({ file, setFile }) => {
  const { url, progress } = useStorage2(file);
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);
  return (
    <div>
      <p className="text-start uploading-txt">Uploading...</p>
      <motion.div
        className="progress-bar"
        initial={{ width: 0 }}
        animate={{ width: progress + '%' }}
      ></motion.div>
    </div>
  );
};
export default ProgressBar;
