'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import { Github, GitBranch, GitCommit, Star } from 'lucide-react'
import { useEffect, useState } from 'react'

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  return isMobile
}

const contributionData = [
  { year: '2023', contributions: 1, fill: '#6f42c1' },
  { year: '2024', contributions: 117, fill: '#fd7e14' },
  { year: '2025', contributions: 674, fill: '#0d6efd' },
  { year: '2026', contributions: 697, fill: '#198754' },
]

const activityData = [
  { name: 'Commits', value: 77, fill: '#00C49F' },
  { name: 'Pull Requests', value: 19, fill: '#0088FE' },
  { name: 'Issues', value: 4, fill: '#FFBB28' },
]

const monthlyContributions = [
  { month: 'Mar', contributions: 19 },
  { month: 'Feb', contributions: 45 },
  { month: 'Jan', contributions: 52 },
  { month: 'Dec', contributions: 68 },
  { month: 'Nov', contributions: 71 },
  { month: 'Oct', contributions: 89 },
  { month: 'Sep', contributions: 93 },
  { month: 'Aug', contributions: 74 },
  { month: 'Jul', contributions: 65 },
  { month: 'Jun', contributions: 58 },
  { month: 'May', contributions: 62 },
  { month: 'Apr', contributions: 55 },
]

const stats = [
  {
    icon: Github,
    label: 'Total Repositories',
    value: '56+',
    description: 'Active projects & contributions',
    color: 'from-purple-500/20 to-purple-600/20',
    borderColor: 'border-purple-500/30',
  },
  {
    icon: GitCommit,
    label: 'Total Contributions',
    value: '1,489+',
    description: '2023 - 2026',
    color: 'from-green-500/20 to-green-600/20',
    borderColor: 'border-green-500/30',
  },
  {
    icon: GitBranch,
    label: '2026 Contributions',
    value: '697',
    description: 'January 2026 - Present',
    color: 'from-blue-500/20 to-blue-600/20',
    borderColor: 'border-blue-500/30',
  },
  {
    icon: Star,
    label: 'Contributions Streak',
    value: '400+',
    description: 'Daily active developer',
    color: 'from-yellow-500/20 to-yellow-600/20',
    borderColor: 'border-yellow-500/30',
  },
]

const GitHubStats = () => {
  const isMobile = useIsMobile()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: isMobile ? 0 : 0.1, delayChildren: isMobile ? 0 : 0.1 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: isMobile ? 0 : 20 },
    visible: { opacity: 1, y: 0, transition: { duration: isMobile ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="github" className="relative py-24 px-6 sm:px-8 bg-black overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-green-500 rounded-full blur-[150px] opacity-[0.02]"></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto z-10 relative"
        variants={containerVariants}
        initial={isMobile ? 'visible' : 'hidden'}
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-16 space-y-4">
          {/* <span className="text-xs font-medium tracking-widest text-white/80 uppercase">
            07. GitHub Activity
          </span> */}
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-6">
            Code Contribution Analytics
          </h2>
          <p className="text-white/80 text-lg font-light max-w-2xl leading-relaxed">
            A detailed breakdown of GitHub activity, contributions, and development patterns. Shipping code consistently, every single day.
          </p>
        </motion.div>

        {/* Statistics Cards */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon
            return (
              <motion.div
                key={idx}
                whileHover={{ y: isMobile ? 0 : -4, backgroundColor: 'rgba(255,255,255,0.03)' }}
                className={`p-6 rounded-3xl border ${stat.borderColor} bg-gradient-to-br ${stat.color} transition-all duration-300`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="p-2 rounded-lg bg-white/5">
                    <Icon className="w-5 h-5 text-white/80" />
                  </div>
                  <div className="text-xs font-medium px-2 py-1 rounded-full bg-white/10 text-white/70">
                    Live
                  </div>
                </div>
                <div className="mb-2">
                  <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-sm text-white/80 font-light">{stat.label}</p>
                </div>
                <p className="text-xs text-white/60">{stat.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Contributions by Year */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <GitCommit className="w-5 h-5 text-green-400" />
              Annual Contributions
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={contributionData} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                <XAxis dataKey="year" stroke="rgba(255,255,255,0.5)" />
                <YAxis stroke="rgba(255,255,255,0.5)" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                  labelStyle={{ color: '#fff' }}
                />
                <Bar dataKey="contributions" radius={[8, 8, 0, 0]} isAnimationActive={!isMobile}>
                  {contributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p className="text-xs text-white/60 mt-4 text-center">
              {Math.round(((697 - 1) / 1 - 1) * 100)}% growth from 2023 to 2026
            </p>
          </motion.div>

          {/* Activity Breakdown */}
          <motion.div
            variants={itemVariants}
            className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
          >
            <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-blue-400" />
              Activity Breakdown
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={activityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={!isMobile}
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'rgba(0,0,0,0.8)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '8px',
                    color: '#fff',
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex gap-6 justify-center mt-4 flex-wrap">
              {activityData.map((item) => (
                <div key={item.name} className="text-center">
                  <div
                    className="w-3 h-3 rounded-full mx-auto mb-1"
                    style={{ backgroundColor: item.fill }}
                  ></div>
                  <p className="text-xs text-white/70">{item.name}</p>
                  <p className="text-sm font-semibold text-white">{item.value}%</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Monthly Contributions Line Chart */}
        <motion.div
          variants={itemVariants}
          className="p-8 rounded-3xl border border-white/5 bg-white/[0.02] backdrop-blur-sm"
        >
          <h3 className="text-xl font-medium text-white mb-4 flex items-center gap-2">
            <Star className="w-5 h-5 text-amber-400" />
            Monthly Contribution Trend (Last Year)
          </h3>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={monthlyContributions} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
              <XAxis dataKey="month" stroke="rgba(255,255,255,0.5)" />
              <YAxis stroke="rgba(255,255,255,0.5)" />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0,0,0,0.8)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '8px',
                  color: '#fff',
                }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend wrapperStyle={{ color: 'rgba(255,255,255,0.7)' }} />
              <Line
                type="monotone"
                dataKey="contributions"
                stroke="#10b981"
                dot={{ fill: '#10b981', r: 4 }}
                activeDot={{ r: 6 }}
                strokeWidth={3}
                isAnimationActive={!isMobile}
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-xs text-white/60 mt-4 text-center">
            Consistent contributions with an average of 62 commits per month
          </p>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={itemVariants}
          className="mt-12 p-8 sm:p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-green-500/10 to-blue-500/10"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-2">
                Explore Full GitHub Profile
              </h3>
              <p className="text-white/80 text-sm">
                View all repositories, projects, and contributions on GitHub
              </p>
            </div>
            <motion.a
              href="https://github.com/01talhaa"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: isMobile ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold hover:bg-white/90 transition-colors whitespace-nowrap"
            >
              <Github className="w-5 h-5" />
              Visit GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default GitHubStats
