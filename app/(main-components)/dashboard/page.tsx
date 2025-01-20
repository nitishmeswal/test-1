'use client';

import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';
import { useUser } from '@/lib/hooks/useUser';
import styles from './styles.module.css';
import { ComingSoonOverlay } from '@/components/ComingSoonOverlay';
import { Badge } from "@/components/ui/badge";

const BetaTag = () => (
  <Badge 
    variant="secondary" 
    className="absolute -top-3 -right-3 px-2.5 py-0.5 text-[10px] font-medium tracking-wider bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-400 border border-blue-500/20 shadow-lg shadow-blue-500/5 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
  >
    BETA
  </Badge>
);

const DashboardPage = () => {
  const router = useRouter();
  const { user, loading } = useUser();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    router.push('/');
    return null;
  }

  return (
    <div className="p-8 max-w-[1600px] mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] text-transparent bg-clip-text mb-2">
          Welcome back, {user?.user_metadata?.full_name || 'User'}
        </h1>
        <p className="text-gray-500">Member since {new Date(user.created_at).toLocaleDateString()}</p>
        <div className="flex gap-8 mt-6">
          <div className="bg-gradient-to-br from-black/10 to-black/30 backdrop-blur-lg rounded-xl p-4 border border-white/5">
            <p className="text-gray-400 text-sm font-medium mb-1">Current Plan</p>
            <p className="text-white text-xl font-semibold">free</p>
          </div>
          <div className="bg-gradient-to-br from-black/10 to-black/30 backdrop-blur-lg rounded-xl p-4 border border-white/5 group relative overflow-hidden">
            <p className="text-gray-400 text-sm font-medium mb-1">Available Credits</p>
            <p className="text-white text-xl font-semibold group-hover:opacity-30 transition-all duration-300">...</p>
            
            {/* Hover overlay with dropdown animation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="transform translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-300 ease-out">
                <Button
                  className="bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] hover:from-[#2D63FF] hover:to-[#40A6FF] text-white font-medium px-6 py-2.5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#40A6FF]/20"
                  onClick={() => router.push('/billing')}
                >
                  Buy Credits
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Models */}
        <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <Card className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300">
            <BetaTag />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">AI Models</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Deploy and manage your AI models with ease. Access pre-trained models or upload your own.
              </p>
              <Button 
                className={styles.dashboardBtn}
                onClick={() => router.push('/ai-models')}
              >
                MANAGE MODELS
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* AI Agents */}
        <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <Card className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300">
            <ComingSoonOverlay 
              type="fixed"
              title="AI Agents"
              description="Our AI Agents marketplace will be available in Version 2.0"
              version="2.0"
            />
            <BetaTag />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">AI Agents</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Deploy powerful AI agents for your blockchain needs. Automate and optimize.
              </p>
              <Button 
                className={styles.dashboardBtn}
                disabled={user?.email !== 'nitishmeswal@gmail.com'}
                onClick={() => router.push('/ai-agents')}
              >
                VIEW AGENTS
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* GPU Marketplace */}
        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-500"></div>
          <Card className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300">
            <BetaTag />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">GPU Marketplace</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Rent or provide GPU computing power. Access high-performance GPUs on demand.
              </p>
              <Button 
                className={styles.dashboardBtn}
                onClick={() => router.push('/gpu-marketplace')}
              >
                EXPLORE GPUS
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Connect to Earn */}
        <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <Card className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300">
            <ComingSoonOverlay 
              type="fixed"
              title="Connect to Earn"
              description="Connect to Earn will be available in Version 3.0"
              version="3.0"
            />
            <BetaTag />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">Connect to Earn</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Share your compute resources and earn credits. Monitor your earnings in real-time.
              </p>
              <Button 
                className={styles.dashboardBtn}
                disabled={user?.email !== 'nitishmeswal@gmail.com'}
                onClick={() => router.push('/connect-to-earn')}
              >
                START EARNING
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* NodeNet */}
        <div className="group relative transform hover:-translate-y-1 transition-all duration-300">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#40A6FF] to-[#2D63FF] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
          <Card className="relative bg-gradient-to-br from-black/40 to-black/60 backdrop-blur-xl border-white/5 hover:border-white/10 transition-all duration-300">
            <ComingSoonOverlay 
              type="fixed"
              title="NodeNet"
              description="NodeNet will be available in Version 3.0. Join our newsletter to be notified!"
              version="3.0"
            />
            <BetaTag />
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl font-bold text-white">NodeNet</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400 mb-6">
                Join our decentralized compute network. View network status and connected nodes.
              </p>
              <Button 
                className={styles.dashboardBtn}
                disabled={user?.email !== 'nitishmeswal@gmail.com'}
                onClick={() => router.push('/dashboard/NodeNet')}
              >
                VIEW NETWORK
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;