import { Palette } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

type Theme = {
  id: string;
  label: string;
  colors: {
    light: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      border: string;
    };
    dark: {
      primary: string;
      secondary: string;
      light: string;
      dark: string;
      border: string;
    };
  };
};

type ThemeSwitcherProps = {
  variant?: 'icon' | 'menu';
  className?: string;
};

const themes: Theme[] = [
  {
    id: 'crimson',
    label: 'Default',
    colors: {
      light: {
        primary: '224 4 51',
        secondary: '18 75 117',
        light: '245 245 245',
        dark: '33 33 33',
        border: '224 224 224',
      },
      dark: {
        primary: '255 99 132',
        secondary: '15 23 42',
        light: '15 23 42',
        dark: '248 250 252',
        border: '51 65 85',
      },
    },
  },
  {
    id: 'emerald',
    label: 'Emerald',
    colors: {
      light: {
        primary: '16 185 129',
        secondary: '6 95 70',
        light: '248 250 252',
        dark: '17 24 39',
        border: '226 232 240',
      },
      dark: {
        primary: '52 211 153',
        secondary: '15 23 42',
        light: '15 23 42',
        dark: '241 245 249',
        border: '51 65 85',
      },
    },
  },
  {
    id: 'scaler',
    label: 'Scaler',
    colors: {
      light: {
        primary: '255 87 34',
        secondary: '15 118 110',
        light: '255 251 235',
        dark: '23 23 23',
        border: '253 186 116',
      },
      dark: {
        primary: '251 146 60',
        secondary: '15 23 42',
        light: '17 24 39',
        dark: '248 250 252',
        border: '71 85 105',
      },
    },
  },
  {
    id: 'vaporwave-80s',
    label: 'Vaporwave 80s',
    colors: {
      light: {
        primary: '178 82 161',
        secondary: '102 161 210',
        light: '220 213 213',
        dark: '44 4 82',
        border: '69 95 101',
      },
      dark: {
        primary: '255 112 226',
        secondary: '15 23 42',
        light: '17 24 39',
        dark: '240 245 255',
        border: '88 28 135',
      },
    },
  },
  {
    id: 'magenta-glow',
    label: 'Magenta Glow',
    colors: {
      light: {
        primary: '216 48 179',
        secondary: '100 12 164',
        light: '251 205 147',
        dark: '44 44 55',
        border: '186 165 195',
      },
      dark: {
        primary: '236 72 153',
        secondary: '15 23 42',
        light: '17 24 39',
        dark: '248 250 252',
        border: '71 85 105',
      },
    },
  },
  {
    id: 'jazz-cup',
    label: 'Jazz Cup',
    colors: {
      light: {
        primary: '44 165 184',
        secondary: '171 92 149',
        light: '255 255 255',
        dark: '52 73 130',
        border: '229 229 229',
      },
      dark: {
        primary: '56 189 248',
        secondary: '15 23 42',
        light: '15 23 42',
        dark: '248 250 252',
        border: '71 85 105',
      },
    },
  },
  {
    id: 'carbon',
    label: 'Carbon',
    colors: {
      light: {
        primary: '59 130 246',
        secondary: '15 23 42',
        light: '248 250 252',
        dark: '15 23 42',
        border: '203 213 225',
      },
      dark: {
        primary: '96 165 250',
        secondary: '15 23 42',
        light: '15 23 42',
        dark: '248 250 252',
        border: '51 65 85',
      },
    },
  },
  {
    id: 'midnight',
    label: 'Midnight',
    colors: {
      light: {
        primary: '79 70 229',
        secondary: '2 6 23',
        light: '248 250 252',
        dark: '15 23 42',
        border: '226 232 240',
      },
      dark: {
        primary: '129 140 248',
        secondary: '2 6 23',
        light: '2 6 23',
        dark: '241 245 249',
        border: '51 65 85',
      },
    },
  },
  {
    id: 'mono',
    label: 'Mono',
    colors: {
      light: {
        primary: '17 24 39',
        secondary: '55 65 81',
        light: '249 250 251',
        dark: '17 24 39',
        border: '229 231 235',
      },
      dark: {
        primary: '226 232 240',
        secondary: '15 23 42',
        light: '15 23 42',
        dark: '248 250 252',
        border: '51 65 85',
      },
    },
  },
  {
    id: 'navy-gold',
    label: 'Navy Gold',
    colors: {
      light: {
        primary: '84 119 146',
        secondary: '26 50 99',
        light: '232 226 219',
        dark: '26 50 99',
        border: '250 185 91',
      },
      dark: {
        primary: '84 119 146',
        secondary: '26 50 99',
        light: '26 50 99',
        dark: '232 226 219',
        border: '250 185 91',
      },
    },
  },
  {
    id: 'slate-blue',
    label: 'Slate Blue',
    colors: {
      light: {
        primary: '84 119 146',
        secondary: '33 52 72',
        light: '234 224 207',
        dark: '33 52 72',
        border: '148 180 193',
      },
      dark: {
        primary: '84 119 146',
        secondary: '33 52 72',
        light: '33 52 72',
        dark: '234 224 207',
        border: '148 180 193',
      },
    },
  },
  {
    id: 'olive-stone',
    label: 'Olive Stone',
    colors: {
      light: {
        primary: '125 141 134',
        secondary: '62 63 41',
        light: '241 240 228',
        dark: '62 63 41',
        border: '188 168 141',
      },
      dark: {
        primary: '125 141 134',
        secondary: '62 63 41',
        light: '62 63 41',
        dark: '241 240 228',
        border: '188 168 141',
      },
    },
  },
  {
    id: 'sunset-fire',
    label: 'Sunset Fire',
    colors: {
      light: {
        primary: '255 101 0',
        secondary: '196 12 12',
        light: '246 206 113',
        dark: '196 12 12',
        border: '204 86 30',
      },
      dark: {
        primary: '255 101 0',
        secondary: '196 12 12',
        light: '196 12 12',
        dark: '246 206 113',
        border: '204 86 30',
      },
    },
  },
  {
    id: 'lime-forest',
    label: 'Lime Forest',
    colors: {
      light: {
        primary: '176 206 136',
        secondary: '4 57 21',
        light: '255 253 143',
        dark: '4 57 21',
        border: '76 118 59',
      },
      dark: {
        primary: '176 206 136',
        secondary: '4 57 21',
        light: '4 57 21',
        dark: '255 253 143',
        border: '76 118 59',
      },
    },
  },
];

const STORAGE_KEY = 'sriabhida-theme';
const STORAGE_MODE_KEY = 'sriabhida-theme-mode';

const applyTheme = (theme: Theme, mode: 'light' | 'dark') => {
  const palette = theme.colors[mode];
  const root = document.documentElement;
  root.dataset.themeMode = mode;
  root.style.setProperty('--color-primary', palette.primary);
  root.style.setProperty('--color-secondary', palette.secondary);
  root.style.setProperty('--color-light', palette.light);
  root.style.setProperty('--color-dark', palette.dark);
  root.style.setProperty('--color-border', palette.border);
};

export default function ThemeSwitcher({ variant = 'icon', className }: ThemeSwitcherProps) {
  const [open, setOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const [mode, setMode] = useState<'light' | 'dark'>('light');
  const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const themeById = useMemo(
    () => new Map(themes.map((theme) => [theme.id, theme])),
    []
  );

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    const storedMode = window.localStorage.getItem(STORAGE_MODE_KEY) as 'light' | 'dark' | null;
    if (stored && themeById.has(stored)) {
      const nextTheme = themeById.get(stored) ?? themes[0];
      setActiveTheme(nextTheme);
      const nextMode = storedMode ?? 'light';
      setMode(nextMode);
      applyTheme(nextTheme, nextMode);
      return;
    }
    applyTheme(themes[0], 'light');
  }, [themeById]);

  const handleSelect = (theme: Theme) => {
    setActiveTheme(theme);
    applyTheme(theme, mode);
    window.localStorage.setItem(STORAGE_KEY, theme.id);
    setOpen(false);
  };

  const handleModeToggle = () => {
    const nextMode = mode === 'light' ? 'dark' : 'light';
    setMode(nextMode);
    applyTheme(activeTheme, nextMode);
    window.localStorage.setItem(STORAGE_MODE_KEY, nextMode);
  };

  useEffect(() => {
    if (!open || variant !== 'icon') return;
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;
    setMenuPosition({
      top: rect.bottom + 8,
      left: Math.max(8, rect.right - 176),
    });
  }, [open, variant]);

  useEffect(() => {
    if (!open || variant !== 'icon') return;
    const handleOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      if (buttonRef.current?.contains(target) || menuRef.current?.contains(target)) {
        return;
      }
      setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, variant]);

  if (variant === 'menu') {
    return (
      <div className={`flex flex-col gap-3 ${className ?? ''}`.trim()}>
        <div className="text-xs uppercase tracking-wider text-dark/60 font-semibold">Theme</div>
        <button
          type="button"
          onClick={handleModeToggle}
          className="self-start text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full border border-border text-dark/70 hover:text-primary hover:border-primary transition-colors"
        >
          {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
        </button>
        <div className="flex flex-wrap gap-2">
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => handleSelect(theme)}
              className={`flex items-center gap-2 px-3 py-2 rounded-full border text-sm transition-colors ${
                activeTheme.id === theme.id
                  ? 'border-primary text-primary'
                  : 'border-border text-dark/70 hover:text-primary hover:border-primary'
              }`}
            >
              <span
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: `rgb(${theme.colors[mode].primary})` }}
              />
              {theme.label}
            </button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className ?? ''}`.trim()}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 text-white/90 hover:text-primary transition-colors"
        aria-label="Change theme"
        ref={buttonRef}
      >
        <Palette className="w-4 h-4" />
        Theme
      </button>
      {open && (
        <div
          className="fixed w-44 bg-light text-dark shadow-xl rounded-lg border border-border p-2 z-[60]"
          style={{ top: menuPosition.top, left: menuPosition.left }}
          ref={menuRef}
        >
          <button
            type="button"
            onClick={handleModeToggle}
            className="w-full flex items-center justify-between px-3 py-2 rounded-md text-xs font-semibold uppercase tracking-wider text-dark/70 hover:text-primary hover:bg-light transition-colors"
          >
            {mode === 'light' ? 'Dark Mode' : 'Light Mode'}
            <span className="text-[10px] bg-light px-2 py-0.5 rounded-full">Toggle</span>
          </button>
          {themes.map((theme) => (
            <button
              key={theme.id}
              type="button"
              onClick={() => handleSelect(theme)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                activeTheme.id === theme.id
                  ? 'bg-light text-primary'
                  : 'hover:bg-light hover:text-primary'
              }`}
            >
              <span
                className="w-3.5 h-3.5 rounded-full"
                style={{ backgroundColor: `rgb(${theme.colors[mode].primary})` }}
              />
              {theme.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
