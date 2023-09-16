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
      <h2>产品功能</h2>
      <IntroductionDiv>
        <div>
          <AllInclusiveIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>免费使用</h3>
          <p>
            本图片压缩工具完全免费，无需注册，可用于在线图像尺寸缩减，使用次数无限。适用于各种场景，有助于减小图像文件大小，提高加载速度和节省存储空间。
          </p>
        </div>
        <div>
          <ElectricBoltIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>快速压缩</h3>
          <p>
            轻量级应用，压缩能力强大，能够缩短所有选定图像的处理时间，确保在最短的时间内完成图像压缩过程。无论是处理一张图像还是一批图像，它都能够迅速完成任务。
          </p>
        </div>
        <div>
          <SecurityIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>隐私安全</h3>
          <p>
            这款应用不仅提供了强大的图像压缩功能，而且还注重用户的隐私和数据安全。我们采取了严格的隐私保护措施，确保用户上传的所有文件都不会存储在任何服务器上，从而确保了100%的隐私和安全。
          </p>
        </div>
        <div>
          <AddCircleOutlineIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>图片批量处理</h3>
          <p>
            这款工具不仅可以处理单个图像，还可以轻松应对大批量的图像处理需求。用户可以一次选择最多10张图像，然后将它们一并压缩，而无需逐一处理。
          </p>
        </div>
        <div>
          <PeopleAltIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>用户友好</h3>
          <p>
            这个工具非常用户友好，不需要高级知识。应用的界面简单明了，用户只需三个简单的步骤就能够完成图像压缩：设置、上传和下载。
          </p>
        </div>
        <div>
          <BuildIcon sx={{ fontSize: 80, color: '#0067b8' }} />
          <h3>强大工具</h3>
          <p>
            这款应用在各种情景下都非常有用，包括网站开发、社交媒体发布、电子邮件传输和移动应用程序开发。无论您是个人用户还是企业用户，都可以从其强大的压缩功能中受益。
          </p>
        </div>
      </IntroductionDiv>
    </IntroductionContainer>
  );
}

export default Introduction;
