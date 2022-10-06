using CandidateTracker.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CandidateTracker.Web.Models
{
    public class UpdateStatusViewModel
    {
        public int Id { get; set; }
        public RegistrationStatus RegistrationStatus { get; set; }
    }
}
