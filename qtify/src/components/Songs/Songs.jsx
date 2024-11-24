import React, { useState } from 'react';
import { Tabs, Tab } from '@mui/material';
import Section from '../Section/Section';
import Carousel from '../Carousel/Carousel';
import '../Songs/Song.css';

const Songs = ({ songs, genres }) => {
  const [activeTab, setActiveTab] = useState('All');

  // Filter songs based on the active tab
  const filteredSongs =
    activeTab === 'All' ? songs : songs.filter((song) => song.genre === activeTab);

  return (
    <div className="songs-section">
      <Section title="Songs" button={null}>
        <Tabs
          value={activeTab}
          onChange={(e, newValue) => setActiveTab(newValue)}
          className="genre-tabs"
          variant="scrollable"
          scrollButtons="auto"
        >
          {genres.map((genre) => (
            <Tab label={genre} value={genre} key={genre} />
          ))}
        </Tabs>
        <Carousel data={filteredSongs} cardType="song" />
      </Section>
    </div>
  );
};

export default Songs;
