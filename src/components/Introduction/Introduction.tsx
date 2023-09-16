import React from 'react';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import SecurityIcon from '@mui/icons-material/Security';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BuildIcon from '@mui/icons-material/Build';
import { IntroductionContainer, IntroductionDiv } from '../Styles/Introduction.styled';

function Introduction() {
  return (
    <IntroductionContainer>
      <h2>FEATURES</h2>
      <IntroductionDiv>
        <div>
          <AllInclusiveIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>Unlimited</h3>
          <p>
            This image compression tool is completely free, requires no registration, and allows
            unlimited use for online image size reduction.
          </p>
        </div>
        <div>
          <ElectricBoltIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>Fast Compression</h3>
          <p>
            Its compression capabilities are robust, resulting in shorter processing times for all
            the selected images.
          </p>
        </div>
        <div>
          <SecurityIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>Security</h3>
          <p>
            All files you upload will not be stored on any servers, ensuring 100% privacy and
            security.
          </p>
        </div>
        <div>
          <AddCircleOutlineIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>Add Multiple Files</h3>
          <p>
            With this tool, you can easily compress up to 10 images simultaneously and save them
            effortlessly.
          </p>
        </div>
        <div>
          <PeopleAltIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>User Friendly</h3>
          <p>
            This tool is user-friendly and does not require advanced knowledge. You can easily
            compress image size in three simple steps: set, upload, and download.
          </p>
        </div>
        <div>
          <BuildIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>Powerful Tool</h3>
          <p>
            You can access the online Image Compressor on any device, be it a smartphone, tablet, or
            computer, for convenient use at any time.
          </p>
        </div>
      </IntroductionDiv>
    </IntroductionContainer>
  );
}

export default Introduction;
