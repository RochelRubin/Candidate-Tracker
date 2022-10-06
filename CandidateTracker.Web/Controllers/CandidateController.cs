using CandidateTracker.Data;
using CandidateTracker.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTracker.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CandidateController : ControllerBase
    {
        private readonly string _connectionString;
        public CandidateController(IConfiguration configuration)
        {
            _connectionString = configuration.GetConnectionString("ConStr");
        }
        [Route("addcandidate")]
        [HttpPost]
        public void AddCandidate(Candidate candidate)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.Add(candidate);
        }
        [Route("getpending")]
        [HttpGet]
        public List<Candidate> GetPending()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidates(RegistrationStatus.Pending);
        }
        [Route("getconfirmed")]
        [HttpGet]
        public List<Candidate> GetConfirmed()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidates(RegistrationStatus.Confirmed);
        }
        [Route("getrefused")]
        [HttpGet]
        public List<Candidate> GetRefused()
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidates(RegistrationStatus.Refused);
        }
        [HttpGet]
        [Route("getcounts")]
        public StatusCounts GetCounts()
        {
            var manager = new CandidateRepository(_connectionString);
            return manager.GetStatusCount();
        }
        [HttpGet]
        [Route("getbyid")]
        public Candidate GetCandidateById(int id)
        {
            var repo = new CandidateRepository(_connectionString);
            return repo.GetCandidateById(id);
        }
        [HttpPost]
        [Route("updatestatus")]
        public void UpdateStatus(UpdateStatusViewModel vm)
        {
            var repo = new CandidateRepository(_connectionString);
            repo.UpdateCandidate(vm.Id, vm.RegistrationStatus);
        }


    }
}
