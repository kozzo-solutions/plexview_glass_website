import { useState, useEffect, useRef } from 'react';

interface CountdownProps {
  targetDate: Date;
}

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  const previousValues = useRef<TimeLeft>({
    months: -1,
    days: -1,
    hours: -1,
    minutes: -1,
    seconds: -1
  });
  
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate.getTime() - now.getTime();
      
      if (diff <= 0) {
        setIsExpired(true);
        return;
      }
      
      const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((diff / (1000 * 60 * 60 * 24)) % 30);
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      
      setTimeLeft({ months, days, hours, minutes, seconds });
    };
    
    // Initial calculation
    updateCountdown();
    
    // Update less frequently (every 2 seconds) for a smoother experience
    const interval = setInterval(updateCountdown, 2000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  // Animate changing numbers - with slower animations
  useEffect(() => {
    const animateIfChanged = (value: number, prevValue: number, elementId: string) => {
      if (value !== prevValue) {
        const element = document.getElementById(elementId);
        if (element) {
          const parent = element.parentElement;
          parent?.classList.add('animate');
          
          // Slow down the animation by increasing the timeout
          setTimeout(() => {
            parent?.classList.remove('animate');
          }, 800); // Increased from 500ms to 800ms for slower animation
        }
      }
    };
    
    // Only animate seconds and minutes (not all units) to make it less busy
    if (timeLeft.seconds !== previousValues.current.seconds) {
      animateIfChanged(timeLeft.seconds, previousValues.current.seconds, 'seconds');
    }
    
    if (timeLeft.minutes !== previousValues.current.minutes) {
      animateIfChanged(timeLeft.minutes, previousValues.current.minutes, 'minutes');
    }
    
    // Only animate other units when they actually change
    if (timeLeft.hours !== previousValues.current.hours) {
      animateIfChanged(timeLeft.hours, previousValues.current.hours, 'hours');
    }
    
    if (timeLeft.days !== previousValues.current.days) {
      animateIfChanged(timeLeft.days, previousValues.current.days, 'days');
    }
    
    if (timeLeft.months !== previousValues.current.months) {
      animateIfChanged(timeLeft.months, previousValues.current.months, 'months');
    }
    
    previousValues.current = { ...timeLeft };
  }, [timeLeft]);

  if (isExpired) {
    return (
      <div className="text-3xl font-bold gradient-text text-center">
        Disponible maintenant!
      </div>
    );
  }

  const formatNumber = (num: number) => num < 10 ? `0${num}` : `${num}`;

  return (
    <div className="flex justify-center gap-4 mb-8" id="countdown">
      <CountdownUnit value={timeLeft.months} label="Mois" id="months" />
      <CountdownUnit value={timeLeft.days} label="Jours" id="days" />
      <CountdownUnit value={timeLeft.hours} label="Heures" id="hours" />
      <CountdownUnit value={timeLeft.minutes} label="Minutes" id="minutes" />
      <CountdownUnit value={timeLeft.seconds} label="Secondes" id="seconds" />
    </div>
  );
}

interface CountdownUnitProps {
  value: number;
  label: string;
  id: string;
}

function CountdownUnit({ value, label, id }: CountdownUnitProps) {
  const formattedValue = value < 10 ? `0${value}` : value;

  return (
    <div className="flex flex-col items-center">
      <div className="glass rounded-xl w-16 h-20 md:w-24 md:h-28 flex items-center justify-center mb-2 overflow-hidden relative number-animation border border-white/20 shadow-lg">
        <span id={id} className="text-3xl md:text-4xl font-bold text-shadow">{formattedValue}</span>
        <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
      </div>
      <span className="text-xs md:text-sm text-gray-300 font-medium">{label}</span>
    </div>
  );
}
