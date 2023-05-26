import React, { useState } from 'react';
import { Star, StarBorder } from '@mui/icons-material';
import styled from 'styled-components';
import { Snackbar } from '@mui/material';

const StarContainer = styled.div`
  color: white;
`;

const SnackBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StarButton = () => {
  const [bookmarked, setBookmarked] = useState(false);
  const [showSnackbar, setShowSnackbar] = useState(false);

  return (
    <>
      <StarContainer
        onClick={() => {
          setShowSnackbar(true);
          setBookmarked(!bookmarked);
        }}
      >
        {bookmarked ? <Star /> : <StarBorder />}
      </StarContainer>
      <Snackbar
        open={showSnackbar}
        autoHideDuration={2000}
        onClose={() => setShowSnackbar(false)}
        message={
          <SnackBarContainer>
            {bookmarked ? <Star /> : <StarBorder />}
            {bookmarked
              ? '상품이 북마크에 추가되었습니다.'
              : '상품이 북마크에서 제거되었습니다.'}
          </SnackBarContainer>
        }
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      />
    </>
  );
};

export default StarButton;