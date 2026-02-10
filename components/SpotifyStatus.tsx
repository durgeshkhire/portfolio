"use client";

import { useEffect, useState } from "react";
import { Music2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const DISCORD_ID = "1390024646232903761";

export default function SpotifyStatus() {
    const [spotify, setSpotify] = useState<any>(null);
    const [loading, setLoading] = useState(true);

    const fetchStatus = async () => {
        try {
            const res = await fetch(`https://api.lanyard.rest/v1/users/${DISCORD_ID}`);
            const json = await res.json();
            if (json.success && json.data.spotify) {
                setSpotify(json.data.spotify);
            } else {
                setSpotify(null);
            }
        } catch (err) {
            console.error("Lanyard fetch failed", err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStatus();
        const interval = setInterval(fetchStatus, 5000); // 5 second reload
        return () => clearInterval(interval);
    }, []);

    if (loading || !spotify) {
        return (
            <div className="glass-card" style={{ padding: '0.75rem 1.25rem', display: 'flex', alignItems: 'center', gap: '0.75rem', opacity: 0.6 }}>
                <Music2 size={18} />
                <span style={{ fontSize: '0.9rem' }}>Not listening to anything</span>
            </div>
        );
    }

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={spotify.song} // Re-animate when song changes
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="glass-card"
                style={{
                    padding: '0.75rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    border: '1px solid rgba(29, 185, 84, 0.3)'
                }}
            >
                <div style={{ position: 'relative', width: 40, height: 40, borderRadius: 8, overflow: 'hidden' }}>
                    {spotify.album_art_url && (
                        <img
                            src={spotify.album_art_url}
                            alt={spotify.album || "Album Art"}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                    )}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Music2 size={14} color="#1DB954" />
                        <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#1DB954' }}>Spotify</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', fontWeight: 600, maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {spotify.song}
                    </p>
                    <p style={{ fontSize: '0.75rem', opacity: 0.7, maxWidth: 200, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        by {spotify.artist}
                    </p>
                </div>
            </motion.div>
        </AnimatePresence>
    );
}
