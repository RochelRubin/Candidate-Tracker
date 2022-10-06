using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace CandidateTracker.Data
{
   public class CandidateRepository
    {
        private readonly string _connectionString;
        public CandidateRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
        public void Add(Candidate candidate)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Candidates.Add(candidate);
            ctx.SaveChanges();
        }
        public List<Candidate> GetCandidates(RegistrationStatus status)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == status).ToList();
                
        }
        public void AddCandidate(Candidate candidate)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Add(candidate);
            ctx.SaveChanges();
        }
        public void UpdateCandidate(int id, RegistrationStatus status)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            ctx.Database.ExecuteSqlInterpolated(
                $"UPDATE Candidates SET RegistrationStatus = {status} WHERE Id = {id}");
        }

        public Candidate GetCandidateById(int id)
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.FirstOrDefault(c => c.Id == id);
        }
        public StatusCounts GetStatusCount()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return new StatusCounts
            {
                Pending = ctx.Candidates.Count(c => c.RegistrationStatus == RegistrationStatus.Pending),
                Confirmed = ctx.Candidates.Count(c => c.RegistrationStatus == RegistrationStatus.Confirmed),
                Refused = ctx.Candidates.Count(c => c.RegistrationStatus == RegistrationStatus.Refused),
            };
        }
        public int GetConfirmedCount()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Confirmed).Count();
        }
        public int GetRefusedCount()
        {
            using var ctx = new CandidateDataContext(_connectionString);
            return ctx.Candidates.Where(c => c.RegistrationStatus == RegistrationStatus.Refused).Count();
        }
    }
}
