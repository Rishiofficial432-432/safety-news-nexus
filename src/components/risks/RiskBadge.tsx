
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Risk } from '@/utils/riskDomains';
import { getRiskLevelColor } from '@/utils/riskDomains';
import { AlertTriangle, AlertCircle, Info } from 'lucide-react';

interface RiskBadgeProps {
  risk: Risk;
  showIcon?: boolean;
}

const RiskBadge: React.FC<RiskBadgeProps> = ({ risk, showIcon = true }) => {
  const getLevelIcon = () => {
    switch (risk.level) {
      case 'high':
        return <AlertTriangle className="h-3 w-3 mr-1" />;
      case 'medium':
        return <AlertCircle className="h-3 w-3 mr-1" />;
      case 'low':
        return <Info className="h-3 w-3 mr-1" />;
      default:
        return null;
    }
  };

  return (
    <Badge className={`${getRiskLevelColor(risk.level)} flex items-center`}>
      {showIcon && getLevelIcon()}
      <span className="capitalize">{risk.level} Risk</span>
    </Badge>
  );
};

export default RiskBadge;
