import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import imageCompression from 'browser-image-compression';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Slider from '@mui/material/Slider';
import MuiInput from '@mui/material/Input';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PhotoSizeSelectLargeIcon from '@mui/icons-material/PhotoSizeSelectLarge';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import DownloadIcon from '@mui/icons-material/Download';
import LockIcon from '@mui/icons-material/Lock';
import processing from '../../assets/processing.png';
import {
  DropZoneSection,
  DropZoneBox,
  DropZoneInnerBox,
  FileBox,
  PreviewImage,
  TextContent,
  DownloadDiv,
  DownloadLink,
  DownloadSection,
  FreshButtonBox,
  FreshButton,
} from '../Styles/DropZone.styled';

function DropZone() {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ maxFiles: 10 });
  const [compressedFileSizes, setCompressedFileSizes] = useState<number[]>([]);
  const [downloadLinks, setDownloadLinks] = useState<string[]>([]);
  const [maxSize, setMaxSize] = useState<number>(500);
  const [maxLength, setMaxLength] = useState<number>(1200);
  const [quality, setQuality] = useState<number>(100);
  const [fileFormat, setFileFormat] = useState<string>('jpg');
  const [isDragging, setIsDragging] = useState(false);

  const handleDragEnter = () => {
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = () => {
    setIsDragging(false);
  };

  const handleSliderChange = (event: Event, newValue: number | number[]) => {
    setQuality(newValue as number);
  };
  const handleLengthSliderChange = (event: Event, newValue: number | number[]) => {
    setMaxLength(newValue as number);
  };
  const handleSizeSliderChange = (event: Event, newValue: number | number[]) => {
    setMaxSize(newValue as number);
  };
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuality(event.target.value === '' ? 0 : Number(event.target.value));
  };
  const handleLengthInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxLength(event.target.value === '' ? 0 : Number(event.target.value));
  };
  const handleSizeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMaxSize(event.target.value === '' ? 0 : Number(event.target.value));
  };
  const handleBlur = () => {
    if (quality < 0) {
      setQuality(0);
    } else if (quality > 100) {
      setQuality(100);
    }
  };
  const handleLengthBlur = () => {
    if (maxLength < 0) {
      setMaxLength(0);
    } else if (maxLength > 4000) {
      setMaxLength(5000);
    }
  };
  const handleSizeBlur = () => {
    if (maxSize < 0) {
      setMaxSize(0);
    } else if (maxSize > 3000) {
      setMaxSize(4000);
    }
  };

  useEffect(() => {
    const compressAndSetLinks = async () => {
      const newCompressedFileSizes = await Promise.all(
        acceptedFiles.map(async (file) => {
          const options = {
            maxSizeMB: maxSize / 1024,
            maxWidthOrHeight: maxLength,
            initialQuality: quality / 100,
            useWebWorker: true,
          };
          try {
            const compressedFile = await imageCompression(file, options);
            const downloadLink = URL.createObjectURL(compressedFile);
            return { size: compressedFile.size, link: downloadLink };
          } catch (error) {
            console.log(error);
            return { size: NaN, link: '' };
          }
        })
      );
      // to solve NaN issue
      const sizes = newCompressedFileSizes.map((item) => item.size);
      setCompressedFileSizes(sizes);
      const links = newCompressedFileSizes.map((item) => item.link);
      setDownloadLinks(links);
    };
    compressAndSetLinks();
  }, [acceptedFiles]);

  const files = acceptedFiles.map((file, index) => (
    <FileBox key={file.name}>
      <PreviewImage src={downloadLinks[index] ? downloadLinks[index] : processing} />
      <TextContent>
        <DownloadDiv>
          <AttachFileIcon sx={{ fontSize: 18 }} />
          文件名: {file.name}
        </DownloadDiv>
        <DownloadDiv>
          <PhotoSizeSelectActualIcon sx={{ fontSize: 18 }} />
          原始大小: {(file.size / 1024).toFixed(0)} KB
        </DownloadDiv>
        <DownloadDiv>
          <PhotoSizeSelectLargeIcon sx={{ fontSize: 18 }} />
          压缩大小:{' '}
          {compressedFileSizes[index] ? (compressedFileSizes[index] / 1024).toFixed(0) : '...'} KB
        </DownloadDiv>
        <DownloadDiv>
          <ArrowCircleDownIcon sx={{ fontSize: 18 }} />
          压缩比例:{' '}
          {compressedFileSizes[index]
            ? (((file.size - compressedFileSizes[index]) * 100) / file.size).toFixed(1)
            : '...'}
          %
        </DownloadDiv>
        <DownloadDiv>
          <DownloadIcon sx={{ fontSize: 18 }} />
          下载:{' '}
          {downloadLinks[index] ? (
            <DownloadLink
              href={downloadLinks[index]}
              download={`compress.${file.size}.${fileFormat}`}
            >
              点击下载
            </DownloadLink>
          ) : (
            'Compressing...'
          )}
        </DownloadDiv>
      </TextContent>
    </FileBox>
  ));

  return (
    <DropZoneSection className="container">
      <aside>
        <h4>第一步: 设置压缩选项</h4>
        <ul>
          <li>
            最大尺寸 (KB):{' '}
            <Box sx={{ maxWidth: 600, marginTop: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={8}>
                  <Slider
                    value={typeof maxSize === 'number' ? maxSize : 0}
                    onChange={handleSizeSliderChange}
                    aria-labelledby="input-slider"
                    max={3000}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item>
                  <MuiInput
                    value={maxSize}
                    size="small"
                    onChange={handleSizeInputChange}
                    onBlur={handleSizeBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 3000,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </li>
          <li>
            最大宽或高:{' '}
            <Box sx={{ maxWidth: 600, marginTop: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={8}>
                  <Slider
                    value={typeof maxLength === 'number' ? maxLength : 0}
                    onChange={handleLengthSliderChange}
                    aria-labelledby="input-slider"
                    max={4000}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item>
                  <MuiInput
                    value={maxLength}
                    size="small"
                    onChange={handleLengthInputChange}
                    onBlur={handleLengthBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 4000,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </li>
          <li>
            图片质量 (%):{' '}
            <Box sx={{ maxWidth: 600, marginTop: 1 }}>
              <Grid container spacing={3} alignItems="center">
                <Grid item xs={8}>
                  <Slider
                    value={typeof quality === 'number' ? quality : 0}
                    onChange={handleSliderChange}
                    aria-labelledby="input-slider"
                    max={100}
                    style={{ width: '100%' }}
                  />
                </Grid>
                <Grid item>
                  <MuiInput
                    value={quality}
                    size="small"
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                    }}
                  />
                </Grid>
              </Grid>
            </Box>
          </li>
          <li>
            图片格式:{' '}
            <Box sx={{ maxWidth: 200, marginTop: 1 }}>
              <FormControl fullWidth>
                <Select
                  id="demo-simple-select"
                  value={fileFormat}
                  onChange={(e) => {
                    setFileFormat(e.target.value);
                  }}
                  sx={{ height: 35 }}
                >
                  <MenuItem value="jpg">JPG</MenuItem>
                  <MenuItem value="jpeg">JPEG</MenuItem>
                  <MenuItem value="png">PNG</MenuItem>
                  <MenuItem value="webp">WebP</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </li>
        </ul>
      </aside>
      <aside>
        <h4>第二步: 上传图片</h4>
        <DropZoneBox
          {...getRootProps({
            className: 'dropzone',
            onDragEnter: handleDragEnter,
            onDragLeave: handleDragLeave,
            onDrop: handleDrop,
          })}
        >
          <DropZoneInnerBox dragging={isDragging ? 'true' : 'false'}>
            <input {...getInputProps()} />
            <p>拖拽并放置图片至此处（最多 10 张图片）</p>
            <div>选择图片</div>
            <p>
              <LockIcon sx={{ fontSize: 18, color: '#5b5c5d' }} />
              文件100%安全
            </p>
          </DropZoneInnerBox>
        </DropZoneBox>
      </aside>
      <aside>
        <h4>步骤 3: 下载图片</h4>
        <DownloadSection>{files}</DownloadSection>
        {downloadLinks.length > 0 ? (
          <FreshButtonBox>
            <FreshButton type="button" onClick={() => window.location.reload()}>
              压缩新图片
            </FreshButton>
          </FreshButtonBox>
        ) : null}
      </aside>
    </DropZoneSection>
  );
}

export default DropZone;
