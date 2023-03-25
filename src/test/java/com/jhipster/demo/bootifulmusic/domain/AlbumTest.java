package com.jhipster.demo.bootifulmusic.domain;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.jhipster.demo.bootifulmusic.web.rest.TestUtil;
import java.util.HashSet;
import java.util.Set;
import org.junit.jupiter.api.Test;

class AlbumTest {

    @Test
    void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(Album.class);
        Album album1 = new Album();
        album1.setId(1L);
        Album album2 = new Album();
        album2.setId(album1.getId());
        assertThat(album1).isEqualTo(album2);
        album2.setId(2L);
        assertThat(album1).isNotEqualTo(album2);
        album1.setId(null);
        assertThat(album1).isNotEqualTo(album2);
    }

    // Test para fijarse si al crear un artista y un album con dicho artista, se
    // crea correctamente la informacion
    @Test
    public void AlbumArtistRelationship() {
        Artist artist = new Artist();
        artist.setName("Test Artist");

        Album album = new Album();
        album.setName("Test Album");
        album.setArtist(artist);

        assertNotNull(album.getArtist());
        assertEquals(artist, album.getArtist());
    }

    // Test para fijarse si al crear un album y un genero, se
    // crea correctamente la informacion
    @Test
    public void AlbumGenreRelationship() {
        Genre genre = new Genre();
        genre.setName("Test Genre");

        Album album = new Album();
        album.setName("Test Album");
        album.setGenre(genre);

        assertNotNull(album.getGenre());
        assertEquals(genre, album.getGenre());
    }

    // Test para fijarse si al crear un album y aniadir tracks, se agregan correctamente
    @Test
    public void AlbumTrackRelationship() {
        Album album = new Album();
        album.setName("Test Album");

        Track track1 = new Track();
        track1.setName("Test Track 1");

        Track track2 = new Track();
        track2.setName("Test Track 2");

        Set<Track> tracks = new HashSet<>();
        tracks.add(track1);
        tracks.add(track2);

        album.setTracks(tracks);

        assertNotNull(album.getTracks());
        assertEquals(tracks, album.getTracks());
        assertEquals(album, track1.getAlbum());
        assertEquals(album, track2.getAlbum());
    }
}
